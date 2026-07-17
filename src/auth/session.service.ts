import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CookieOptions, Request, Response } from 'express';

export interface SessionUser {
  readonly id: string;
  readonly email: string;
  readonly fullName: string;
  readonly company?: string;
}

export const SESSION_COOKIE_NAME = 'telvri_session';

const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

interface SessionTokenPayload {
  readonly sub: string;
  readonly email: string;
  readonly fullName: string;
  readonly company?: string;
}

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  issueSession(response: Response, user: SessionUser): void {
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      fullName: user.fullName,
      company: user.company,
    } satisfies SessionTokenPayload);

    response.cookie(SESSION_COOKIE_NAME, token, this.cookieOptions());
  }

  clearSession(response: Response): void {
    response.clearCookie(SESSION_COOKIE_NAME, { ...this.cookieOptions(), maxAge: undefined });
  }

  readSession(request: Request): SessionUser | null {
    const cookies = (request as Request & { cookies?: Record<string, string> }).cookies;
    const token = cookies?.[SESSION_COOKIE_NAME];

    if (!token) {
      return null;
    }

    try {
      const payload = this.jwtService.verify<SessionTokenPayload>(token);
      return {
        id: payload.sub,
        email: payload.email,
        fullName: payload.fullName,
        company: payload.company,
      };
    } catch {
      return null;
    }
  }

  private cookieOptions(): CookieOptions {
    const isProduction =
      (this.configService.get<string>('NODE_ENV') ?? process.env.NODE_ENV) === 'production' ||
      Boolean(process.env.VERCEL);

    return {
      httpOnly: true,
      sameSite: 'lax',
      secure: isProduction,
      path: '/',
      maxAge: SESSION_MAX_AGE_MS,
    };
  }
}
