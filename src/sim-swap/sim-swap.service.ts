import { Injectable } from '@nestjs/common';

import {
  CARRIER_PREFIX_RULES,
  COUNTRY_CALLING_CODES,
  COUNTRY_FALLBACK_CARRIERS,
} from './carrier-prefix.catalog';
import { CheckSimSwapDto } from './dto/check-sim-swap.dto';
import { SimSwapResponseDto } from './dto/sim-swap-response.dto';

@Injectable()
export class SimSwapService {
  private readonly carrierRules = [...CARRIER_PREFIX_RULES].sort(
    (left, right) => right.prefix.length - left.prefix.length,
  );

  private readonly countryCodes = [...COUNTRY_CALLING_CODES].sort(
    (left, right) => right.code.length - left.code.length,
  );

  performNetworkQuery(dto: CheckSimSwapDto): SimSwapResponseDto {
    const maxAgeHours = dto.maxAgeHours ?? 24;
    const hoursSinceSwap = dto.phoneNumber.endsWith('9') ? 2 : 8 * 24;
    const swapped = hoursSinceSwap <= maxAgeHours;
    const carrier = this.resolveCarrierName(dto.phoneNumber);

    return {
      phoneNumber: dto.phoneNumber,
      swapped,
      lastSwappedAt: this.calculateObservedTimestamp(hoursSinceSwap),
      provider: carrier,
      operator: carrier,
    };
  }

  private resolveCarrierName(phoneNumber: string): string {
    const prefixMatch = this.carrierRules.find((rule) => phoneNumber.startsWith(rule.prefix));
    if (prefixMatch) {
      return prefixMatch.carrier;
    }

    const country = this.resolveCountry(phoneNumber);
    const fallbackCarriers = country ? COUNTRY_FALLBACK_CARRIERS[country] : undefined;
    if (fallbackCarriers && fallbackCarriers.length > 0) {
      const index = this.stableIndex(phoneNumber, fallbackCarriers.length);
      return fallbackCarriers[index];
    }

    return 'Unknown Operator';
  }

  private resolveCountry(phoneNumber: string): string | undefined {
    return this.countryCodes.find((entry) => phoneNumber.startsWith(entry.code))?.country;
  }

  private stableIndex(phoneNumber: string, modulo: number): number {
    let hash = 0;
    for (let index = 0; index < phoneNumber.length; index += 1) {
      hash = (hash * 31 + phoneNumber.charCodeAt(index)) >>> 0;
    }
    return hash % modulo;
  }

  private calculateObservedTimestamp(hoursAgo: number): string {
    const observedAt = new Date();
    observedAt.setHours(observedAt.getHours() - hoursAgo);
    return observedAt.toISOString();
  }
}
