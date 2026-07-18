import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule } from '@nestjs/throttler';

import { ApiKeysModule } from '../api-keys/api-keys.module';
import { UsersModule } from '../users/users.module';
import { ApiKeyGuard } from './api-key.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CsrfGuard } from './csrf.guard';
import { SessionGuard } from './session.guard';
import { SessionService } from './session.service';

@Global()
@Module({
  imports: [
    UsersModule,
    ApiKeysModule,
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 60_000,
        limit: 100,
      },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        const isProduction =
          (configService.get<string>('NODE_ENV') ?? process.env.NODE_ENV) === 'production' ||
          Boolean(process.env.VERCEL);

        if (!secret) {
          if (isProduction) {
            throw new Error('JWT_SECRET must be set in production.');
          }

          return {
            secret: 'telvri-dev-session-secret-change-me',
            signOptions: { expiresIn: '7d' as const },
          };
        }

        return {
          secret,
          signOptions: { expiresIn: '7d' as const },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [ApiKeyGuard, AuthService, SessionService, SessionGuard, CsrfGuard],
  exports: [ApiKeyGuard, AuthService, SessionService, SessionGuard, CsrfGuard],
})
export class AuthModule {}
