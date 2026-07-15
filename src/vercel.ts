import express, { Request, Response } from 'express';

import { createNestApp } from './create-app';

let server: express.Express | undefined;

async function getServer(): Promise<express.Express> {
  if (server) {
    return server;
  }

  const expressApp = express();
  await createNestApp(expressApp);
  server = expressApp;
  return server;
}

export default async function handler(request: Request, response: Response): Promise<void> {
  const expressServer = await getServer();
  expressServer(request, response);
}
