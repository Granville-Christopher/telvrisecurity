import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { SessionUser } from './session.service';

interface AuthErrorPayload {
  error: string;
  message: string;
  statusCode: number;
}

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(dto: LoginDto): Promise<SessionUser> {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) {
      throw this.unauthorized('Invalid email or password.');
    }

    const passwordMatches = await this.usersService.verifyPassword(user, dto.password);
    if (!passwordMatches) {
      throw this.unauthorized('Invalid email or password.');
    }

    return this.toSessionUser(user._id.toString(), user.email, user.fullName, user.company);
  }

  async signup(dto: SignupDto): Promise<SessionUser> {
    if (dto.password !== dto.confirmPassword) {
      throw this.badRequest('Passwords do not match.');
    }

    try {
      const user = await this.usersService.create({
        email: dto.email,
        password: dto.password,
        fullName: dto.fullName,
        company: dto.company,
      });

      return this.toSessionUser(user._id.toString(), user.email, user.fullName, user.company);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw this.badRequest('An account with this email already exists.');
      }

      throw error;
    }
  }

  private toSessionUser(
    id: string,
    email: string,
    fullName: string,
    company?: string,
  ): SessionUser {
    return { id, email, fullName, company };
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
