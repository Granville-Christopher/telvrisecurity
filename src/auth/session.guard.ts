import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

import { SessionService, SessionUser } from './session.service';

export type RequestWithSession = Request & { sessionUser?: SessionUser };

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly sessionService: SessionService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithSession>();
    const sessionUser = this.sessionService.readSession(request);

    if (!sessionUser) {
      throw new UnauthorizedException({
        error: 'unauthorized',
        message: 'You must be signed in to perform this action.',
        statusCode: 401,
      });
    }

    request.sessionUser = sessionUser;
    return true;
  }
}
