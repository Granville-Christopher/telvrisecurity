import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsISO8601, IsOptional, IsString, MaxLength, MinLength, ValidateIf } from 'class-validator';

export enum ApiKeyExpiration {
  Never = 'never',
  Days30 = '30d',
  Days90 = '90d',
  Days180 = '180d',
  Days365 = '365d',
  Custom = 'custom',
}

export class CreateApiKeyDto {
  @ApiProperty({
    description: 'A human-friendly label to identify this key.',
    example: 'Production backend',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MinLength(1, { message: 'Give the key a name.' })
  @MaxLength(60, { message: 'Key name must be 60 characters or fewer.' })
  name!: string;

  @ApiProperty({
    description: 'When the key should expire.',
    enum: ApiKeyExpiration,
    example: ApiKeyExpiration.Days90,
  })
  @IsEnum(ApiKeyExpiration, { message: 'Choose a valid expiration option.' })
  expiration!: ApiKeyExpiration;

  @ApiPropertyOptional({
    description: 'Custom expiry date (ISO 8601). Required when expiration is "custom".',
    example: '2026-12-31',
  })
  @ValidateIf((dto: CreateApiKeyDto) => dto.expiration === ApiKeyExpiration.Custom)
  @IsISO8601({ strict: false }, { message: 'Pick a valid expiry date.' })
  expiresAt?: string;
}

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export function resolveExpiryDate(dto: CreateApiKeyDto): Date | null {
  switch (dto.expiration) {
    case ApiKeyExpiration.Never:
      return null;
    case ApiKeyExpiration.Days30:
      return new Date(Date.now() + 30 * DAY_IN_MS);
    case ApiKeyExpiration.Days90:
      return new Date(Date.now() + 90 * DAY_IN_MS);
    case ApiKeyExpiration.Days180:
      return new Date(Date.now() + 180 * DAY_IN_MS);
    case ApiKeyExpiration.Days365:
      return new Date(Date.now() + 365 * DAY_IN_MS);
    case ApiKeyExpiration.Custom: {
      if (!dto.expiresAt) {
        return null;
      }
      const parsed = new Date(dto.expiresAt);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }
    default:
      return null;
  }
}
