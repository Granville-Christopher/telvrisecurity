import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CookieOptions, Request, Response } from 'express';
import { randomBytes } from 'crypto';

import { CSRF_COOKIE_NAME } from './csrf.constants';

export interface SessionUser {
  readonly id: string;
  readonly email: string;
  readonly fullName: string;
  readonly company?: string;
  readonly sessionVersion: number;
}

export const SESSION_COOKIE_NAME = 'telvri_session';

const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

interface SessionTokenPayload {
  readonly sub: string;
  readonly email: string;
  readonly fullName: string;
  readonly company?: string;
  readonly sv: number;
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
      sv: user.sessionVersion,
    } satisfies SessionTokenPayload);

    response.cookie(SESSION_COOKIE_NAME, token, this.sessionCookieOptions());
    this.issueCsrfCookie(response);
  }

  clearSession(response: Response): void {
    response.clearCookie(SESSION_COOKIE_NAME, {
      ...this.sessionCookieOptions(),
      maxAge: undefined,
    });
    response.clearCookie(CSRF_COOKIE_NAME, {
      ...this.csrfCookieOptions(),
      maxAge: undefined,
    });
  }

  ensureCsrfCookie(request: Request, response: Response): string {
    const cookies = (request as Request & { cookies?: Record<string, string> }).cookies;
    const existing = cookies?.[CSRF_COOKIE_NAME];

    if (existing) {
      return existing;
    }

    return this.issueCsrfCookie(response);
  }

  issueCsrfCookie(response: Response): string {
    const token = randomBytes(32).toString('hex');
    response.cookie(CSRF_COOKIE_NAME, token, this.csrfCookieOptions());
    return token;
  }

  readSessionToken(request: Request): SessionTokenPayload | null {
    const cookies = (request as Request & { cookies?: Record<string, string> }).cookies;
    const token = cookies?.[SESSION_COOKIE_NAME];

    if (!token) {
      return null;
    }

    try {
      return this.jwtService.verify<SessionTokenPayload>(token);
    } catch {
      return null;
    }
  }

  private sessionCookieOptions(): CookieOptions {
    return {
      httpOnly: true,
      sameSite: 'strict',
      secure: this.isProduction(),
      path: '/',
      maxAge: SESSION_MAX_AGE_MS,
    };
  }

  private csrfCookieOptions(): CookieOptions {
    return {
      httpOnly: false,
      sameSite: 'strict',
      secure: this.isProduction(),
      path: '/',
      maxAge: SESSION_MAX_AGE_MS,
    };
  }

  private isProduction(): boolean {
    return (
      (this.configService.get<string>('NODE_ENV') ?? process.env.NODE_ENV) === 'production' ||
      Boolean(process.env.VERCEL)
    );
  }
}
