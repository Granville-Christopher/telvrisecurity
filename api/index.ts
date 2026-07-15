import type { VercelRequest, VercelResponse } from '@vercel/node';

type VercelHandler = (request: VercelRequest, response: VercelResponse) => Promise<void> | void;

let handler: VercelHandler | undefined;

export default async (request: VercelRequest, response: VercelResponse): Promise<void> => {
  if (!handler) {
    const module = await import('../dist/vercel');
    handler = module.default as VercelHandler;
  }

  await handler(request, response);
};
