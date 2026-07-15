import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException, UnauthorizedException)
export class AuthRedirectExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException | UnauthorizedException, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<{
      method: string;
      path: string;
      body?: Record<string, string>;
    }>();

    const message = this.resolveMessage(exception);
    const body = request.body ?? {};
    const isSignup = request.path.includes('signup');

    if (isSignup) {
      const query = new URLSearchParams({
        error: message,
        email: body.email ?? '',
        fullName: body.fullName ?? '',
        company: body.company ?? '',
      });
      response.redirect(`/signup?${query.toString()}`);
      return;
    }

    const email = body.email ?? '';
    response.redirect(`/login?error=${encodeURIComponent(message)}&email=${encodeURIComponent(email)}`);
  }

  private resolveMessage(exception: BadRequestException | UnauthorizedException): string {
    const payload = exception.getResponse();

    if (typeof payload === 'string') {
      return payload;
    }

    if (typeof payload === 'object' && payload !== null && 'message' in payload) {
      const message = (payload as { message: string | string[] }).message;
      return Array.isArray(message) ? message[0] ?? 'Request validation failed.' : message;
    }

    return 'Request validation failed.';
  }
}
