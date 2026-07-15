import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({
    description: 'Full name for the developer account.',
    example: 'Ada Okonkwo',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @MinLength(2, { message: 'Full name must be at least 2 characters.' })
  fullName!: string;

  @ApiProperty({
    description: 'Work email used for dashboard access and API key delivery.',
    example: 'ada@fintech.example',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim().toLowerCase() : value))
  @IsEmail({}, { message: 'Enter a valid email address.' })
  email!: string;

  @ApiPropertyOptional({
    description: 'Company or team name.',
    example: 'Northwind Fintech',
  })
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsOptional()
  @IsString()
  company?: string;

  @ApiProperty({
    description: 'Account password.',
    example: 'TelvriSecure123',
    minLength: 8,
  })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password!: string;

  @ApiProperty({
    description: 'Password confirmation.',
    example: 'TelvriSecure123',
    minLength: 8,
  })
  @IsString()
  @MinLength(8, { message: 'Confirm password must be at least 8 characters.' })
  confirmPassword!: string;
}
