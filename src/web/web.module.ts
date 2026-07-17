import { Module } from '@nestjs/common';

import { ApiKeysModule } from '../api-keys/api-keys.module';
import { DashboardController } from './dashboard.controller';
import { HomepageResourcesService } from './services/homepage-resources.service';
import { WebController } from './web.controller';

@Module({
  imports: [ApiKeysModule],
  controllers: [WebController, DashboardController],
  providers: [HomepageResourcesService],
})
export class WebModule {}
