import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

import { UsersService } from '../users/users.service';
import { SessionService, SessionUser } from './session.service';

export type RequestWithSession = Request & { sessionUser?: SessionUser };

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(
    private readonly sessionService: SessionService,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithSession>();
    const payload = this.sessionService.readSessionToken(request);

    if (!payload?.sub) {
      throw this.unauthorized();
    }

    const user = await this.usersService.findById(payload.sub);

    if (!user) {
      throw this.unauthorized();
    }

    const sessionVersion = user.sessionVersion ?? 0;

    if (payload.sv !== sessionVersion) {
      throw this.unauthorized();
    }

    request.sessionUser = {
      id: user._id.toString(),
      email: user.email,
      fullName: user.fullName,
      company: user.company,
      sessionVersion,
    };

    return true;
  }

  private unauthorized(): UnauthorizedException {
    return new UnauthorizedException({
      error: 'unauthorized',
      message: 'You must be signed in to perform this action.',
      statusCode: 401,
    });
  }
}
