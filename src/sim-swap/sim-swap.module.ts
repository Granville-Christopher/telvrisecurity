import { Module } from '@nestjs/common';

import { SimSwapController } from './sim-swap.controller';
import { SimSwapService } from './sim-swap.service';

@Module({
  controllers: [SimSwapController],
  providers: [SimSwapService],
  exports: [SimSwapService],
})
export class SimSwapModule {}
