import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import { ApiKeysService } from '../api-keys/api-keys.service';
import { AuthenticatedRequest } from './authenticated-request.interface';

interface ApiErrorPayload {
  error: string;
  message: string;
  statusCode: number;
}

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const apiKey = this.extractApiKey(request);

    if (!apiKey) {
      throw this.unauthorized('Missing API key. Provide X-API-Key or Authorization: Bearer <KEY>.');
    }

    if (!apiKey.startsWith('rt_live_')) {
      throw this.unauthorized('Invalid API key format. Live keys must start with rt_live_.');
    }

    const verified = await this.apiKeysService.verify(apiKey);
    if (!verified) {
      throw this.unauthorized('API key is invalid, expired, or revoked.');
    }

    request.developer = { id: verified.userId, tier: 'growth' };
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

  private unauthorized(message: string): UnauthorizedException {
    const payload: ApiErrorPayload = {
      error: 'unauthorized',
      message,
      statusCode: 401,
    };

    return new UnauthorizedException(payload);
  }
}
