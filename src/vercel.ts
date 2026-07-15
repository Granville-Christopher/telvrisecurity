import type { Request, Response } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

import { createNestApp } from './create-app';

let nestApp: NestExpressApplication | undefined;

async function getNestApp(): Promise<NestExpressApplication> {
  if (nestApp) {
    return nestApp;
  }

  nestApp = await createNestApp();
  return nestApp;
}

export default async function handler(request: Request, response: Response): Promise<void> {
  const app = await getNestApp();
  const expressServer = app.getHttpAdapter().getInstance();
  expressServer(request, response);
}
