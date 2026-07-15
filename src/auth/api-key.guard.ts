import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { AuthenticatedRequest } from './authenticated-request.interface';
import { DeveloperClient } from './developer-client.interface';

interface ApiErrorPayload {
  error: string;
  message: string;
  statusCode: number;
}

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const apiKey = this.extractApiKey(request);

    if (!apiKey) {
      throw this.unauthorized('Missing API key. Provide X-API-Key or Authorization: Bearer <KEY>.');
    }

    if (!apiKey.startsWith('rt_live_')) {
      throw this.unauthorized('Invalid API key format. Live keys must start with rt_live_.');
    }

    const developer = this.mockVerifyDeveloperKey(apiKey);
    if (!developer) {
      throw this.unauthorized('API key could not be verified.');
    }

    request.developer = developer;
    return true;
  }

  private extractApiKey(request: AuthenticatedRequest): string | undefined {
    const headerKey = request.header('X-API-Key');
    if (headerKey) {
      return headerKey.trim();
    }

    const authorization = request.header('Authorization');
    if (!authorization) {
      return undefined;
    }

    const bearerMatch = authorization.match(/^Bearer\s+(.+)$/i);
    return bearerMatch?.[1]?.trim();
  }

  private mockVerifyDeveloperKey(apiKey: string): DeveloperClient | undefined {
    return apiKey.length > 'rt_live_'.length
      ? { id: 'dev_user_01HK78B', tier: 'enterprise' }
      : undefined;
  }

  private unauthorized(message: string): UnauthorizedException {
    const payload: ApiErrorPayload = {
      error: 'unauthorized',
      message,
      statusCode: 401,
    };

    return new UnauthorizedException(payload);
  }
}
