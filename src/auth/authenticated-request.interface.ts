import { Request } from 'express';

import { DeveloperClient } from './developer-client.interface';

export interface AuthenticatedRequest extends Request {
  developer?: DeveloperClient;
}
