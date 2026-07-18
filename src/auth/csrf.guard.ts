import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { timingSafeEqual } from 'crypto';

import {
  CSRF_COOKIE_NAME,
  CSRF_FORM_FIELD_NAME,
  CSRF_HEADER_NAME,
} from './csrf.constants';

@Injectable()
export class CsrfGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const method = request.method.toUpperCase();

    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
      return true;
    }

    const cookies = (request as Request & { cookies?: Record<string, string> }).cookies;
    const cookieToken = cookies?.[CSRF_COOKIE_NAME];
    const headerToken = request.header(CSRF_HEADER_NAME);
    const bodyToken =
      typeof request.body === 'object' &&
      request.body !== null &&
      CSRF_FORM_FIELD_NAME in request.body
        ? String((request.body as Record<string, unknown>)[CSRF_FORM_FIELD_NAME] ?? '')
        : '';
    const submittedToken = headerToken || bodyToken;

    if (!cookieToken || !submittedToken || !safeEqual(cookieToken, submittedToken)) {
      throw new ForbiddenException({
        error: 'forbidden',
        message: 'Invalid or missing CSRF token.',
        statusCode: 403,
      });
    }

    this.assertTrustedOrigin(request);
    return true;
  }

  private assertTrustedOrigin(request: Request): void {
    const origin = request.header('origin');
    const referer = request.header('referer');
    const host = request.header('x-forwarded-host') || request.header('host');

    if (!host) {
      return;
    }

    const expectedHosts = new Set([host.toLowerCase()]);
    const candidate = origin || referer;

    if (!candidate) {
      // Same-origin form posts may omit Origin; Referer is preferred when present.
      return;
    }

    try {
      const url = new URL(candidate);
      if (!expectedHosts.has(url.host.toLowerCase())) {
        throw new ForbiddenException({
          error: 'forbidden',
          message: 'Untrusted request origin.',
          statusCode: 403,
        });
      }
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw error;
      }

      throw new ForbiddenException({
        error: 'forbidden',
        message: 'Untrusted request origin.',
        statusCode: 403,
      });
    }
  }
}

function safeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}
