import { Injectable } from '@nestjs/common';

import { CheckSimSwapDto } from './dto/check-sim-swap.dto';
import { SimSwapResponseDto } from './dto/sim-swap-response.dto';

interface CarrierPrefixRule {
  readonly prefix: string;
  readonly carrier: string;
}

@Injectable()
export class SimSwapService {
  private readonly carrierPrefixRules: readonly CarrierPrefixRule[] = [
    { prefix: '+234', carrier: 'MTN Nigeria' },
    { prefix: '+254', carrier: 'Safaricom' },
    { prefix: '+20', carrier: 'Vodafone Egypt' },
  ];

  performNetworkQuery(dto: CheckSimSwapDto): SimSwapResponseDto {
    const swapped = dto.phoneNumber.endsWith('9');
    const observedAt = this.calculateObservedTimestamp(swapped);
    const carrier = this.resolveCarrierName(dto.phoneNumber);

    return {
      phoneNumber: dto.phoneNumber,
      swapped,
      lastSwappedAt: observedAt,
      provider: carrier,
      operator: carrier,
    };
  }

  private resolveCarrierName(phoneNumber: string): string {
    const match = this.carrierPrefixRules.find((rule) => phoneNumber.startsWith(rule.prefix));
    return match?.carrier ?? 'Unknown Operator';
  }

  private calculateObservedTimestamp(swapped: boolean): string {
    const observedAt = new Date();
    const hoursAgo = swapped ? 2 : 8 * 24;
    observedAt.setHours(observedAt.getHours() - hoursAgo);
    return observedAt.toISOString();
  }
}
