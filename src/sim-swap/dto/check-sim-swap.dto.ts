import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsInt, IsOptional, Matches, Max, Min } from 'class-validator';

export class CheckSimSwapDto {
  @ApiProperty({
    description:
      'Subscriber phone number in strict E.164 format. Supports global numbering plans (e.g. +1 US, +49 DE, +234 NG Airtel/MTN).',
    example: '+2348021234567',
    examples: ['+2348021234567', '+491701234567', '+14155552671', '+447700900123'],
    pattern: '^\\+[1-9]\\d{1,14}$',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @Matches(/^\+[1-9]\d{1,14}$/, {
    message: 'phoneNumber must be a valid E.164 phone number, for example +2348021234567 or +14155552671.',
  })
  phoneNumber!: string;

  @ApiPropertyOptional({
    description: 'Maximum acceptable age, in hours, for SIM-swap intelligence.',
    example: 24,
    default: 24,
    minimum: 1,
    maximum: 168,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(168)
  maxAgeHours: number = 24;
}
