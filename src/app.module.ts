import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { SimSwapModule } from './sim-swap/sim-swap.module';
import { WebModule } from './web/web.module';

@Module({
  imports: [AuthModule, SimSwapModule, WebModule],
})
export class AppModule {}
