import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SimSwapResponseDto {
  @ApiProperty({
    description: 'Subscriber phone number in E.164 format.',
    example: '+2348031234567',
  })
  phoneNumber!: string;

  @ApiProperty({
    description: 'Whether the network registry indicates a recent SIM swap.',
    example: false,
  })
  swapped!: boolean;

  @ApiPropertyOptional({
    description: 'ISO-8601 timestamp of the most recent SIM-swap signal.',
    example: '2026-07-14T16:27:00.000Z',
    format: 'date-time',
  })
  lastSwappedAt?: string;

  @ApiProperty({
    description: 'Resolved mobile network operator or telecom provider.',
    example: 'MTN Nigeria',
  })
  provider!: string;

  @ApiProperty({
    description: 'Resolved mobile network operator. Alias retained for telco domain consumers.',
    example: 'MTN Nigeria',
  })
  operator!: string;
}
