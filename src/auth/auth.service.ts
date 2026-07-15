import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { AuthSession } from './auth-session.interface';

interface AuthErrorPayload {
  error: string;
  message: string;
  statusCode: number;
}

@Injectable()
export class AuthService {
  login(dto: LoginDto): AuthSession {
    if (!dto.password || dto.password.length < 8) {
      throw this.unauthorized('Invalid email or password.');
    }

    return {
      id: 'dev_user_01HK78B',
      email: dto.email,
      fullName: this.deriveDisplayName(dto.email),
    };
  }

  signup(dto: SignupDto): AuthSession {
    if (dto.password !== dto.confirmPassword) {
      throw this.badRequest('Passwords do not match.');
    }

    return {
      id: 'dev_user_01HK78B',
      email: dto.email,
      fullName: dto.fullName,
      company: dto.company,
    };
  }

  private deriveDisplayName(email: string): string {
    const localPart = email.split('@')[0] ?? 'Developer';
    return localPart
      .split(/[._-]/)
      .filter((segment) => segment.length > 0)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' ');
  }

  private unauthorized(message: string): UnauthorizedException {
    const payload: AuthErrorPayload = {
      error: 'unauthorized',
      message,
      statusCode: 401,
    };

    return new UnauthorizedException(payload);
  }

  private badRequest(message: string): BadRequestException {
    const payload: AuthErrorPayload = {
      error: 'bad_request',
      message,
      statusCode: 400,
    };

    return new BadRequestException(payload);
  }
}
