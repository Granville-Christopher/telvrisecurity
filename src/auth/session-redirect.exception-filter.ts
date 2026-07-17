import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * For browser page navigations (Accept: text/html), send unauthenticated users
 * to /login instead of a raw JSON 401.
 */
@Catch(UnauthorizedException)
export class SessionRedirectExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<{ headers?: Record<string, string | string[] | undefined> }>();
    const acceptHeader = request.headers?.accept;
    const accept = Array.isArray(acceptHeader) ? acceptHeader[0] : acceptHeader;

    if (accept && accept.includes('text/html')) {
      response.redirect('/login');
      return;
    }

    response.status(exception.getStatus()).json(exception.getResponse());
  }
}
