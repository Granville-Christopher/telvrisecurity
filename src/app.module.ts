import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiKeysModule } from './api-keys/api-keys.module';
import { AuthModule } from './auth/auth.module';
import { SimSwapModule } from './sim-swap/sim-swap.module';
import { UsersModule } from './users/users.module';
import { WebModule } from './web/web.module';

const DEFAULT_MONGODB_URI = 'mongodb://127.0.0.1:27017/telvri';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI') ?? DEFAULT_MONGODB_URI;

        return {
          uri,
          // Do not block Nest bootstrap on MongoDB — required for Vercel serverless
          // so the marketing site can respond while Atlas connects in the background.
          lazyConnection: true,
          retryAttempts: 2,
          retryDelay: 1000,
          serverSelectionTimeoutMS: 5000,
          connectTimeoutMS: 5000,
          socketTimeoutMS: 20000,
          maxPoolSize: 1,
          minPoolSize: 0,
        };
      },
    }),
    UsersModule,
    ApiKeysModule,
    AuthModule,
    SimSwapModule,
    WebModule,
  ],
})
export class AppModule {}
