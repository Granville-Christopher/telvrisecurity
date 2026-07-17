import type { Request, Response } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

import { createNestApp } from './create-app';

type GlobalNestCache = typeof globalThis & {
  __telvriNestApp?: NestExpressApplication;
  __telvriNestAppPromise?: Promise<NestExpressApplication>;
};

async function getNestApp(): Promise<NestExpressApplication> {
  const cache = globalThis as GlobalNestCache;

  if (cache.__telvriNestApp) {
    return cache.__telvriNestApp;
  }

  if (!cache.__telvriNestAppPromise) {
    cache.__telvriNestAppPromise = createNestApp().then((app) => {
      cache.__telvriNestApp = app;
      return app;
    });
  }

  return cache.__telvriNestAppPromise;
}

export default async function handler(request: Request, response: Response): Promise<void> {
  const app = await getNestApp();
  const expressServer = app.getHttpAdapter().getInstance();
  expressServer(request, response);
}
