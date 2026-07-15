import { Module } from '@nestjs/common';

import { HomepageResourcesService } from './services/homepage-resources.service';
import { WebController } from './web.controller';

@Module({
  controllers: [WebController],
  providers: [HomepageResourcesService],
})
export class WebModule {}
