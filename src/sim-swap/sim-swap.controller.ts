import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { ApiKeyGuard } from '../auth/api-key.guard';
import { CheckSimSwapDto } from './dto/check-sim-swap.dto';
import { SimSwapResponseDto } from './dto/sim-swap-response.dto';
import { SimSwapService } from './sim-swap.service';

@ApiTags('SIM Swap Intelligence')
@ApiSecurity('X-API-Key')
@ApiBearerAuth('Bearer')
@ApiHeader({
  name: 'X-API-Key',
  required: false,
  description: 'Developer API key. Alternative: Authorization: Bearer <KEY>.',
  example: 'rt_live_1234567890abcdef',
})
@UseGuards(ApiKeyGuard)
@Controller('v1/security')
export class SimSwapController {
  constructor(private readonly simSwapService: SimSwapService) {}

  @Post('sim-check')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Run a real-time SIM-swap risk check',
    description:
      'Checks a subscriber phone number against mocked telecom registry intelligence and returns whether recent SIM-swap activity is present.',
  })
  @ApiOkResponse({
    description: 'SIM-swap intelligence response.',
    type: SimSwapResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Request body failed validation.',
  })
  @ApiUnauthorizedResponse({
    description: 'Missing, malformed, or unverified developer API key.',
  })
  checkSimSwap(@Body() dto: CheckSimSwapDto): SimSwapResponseDto {
    return this.simSwapService.performNetworkQuery(dto);
  }
}
