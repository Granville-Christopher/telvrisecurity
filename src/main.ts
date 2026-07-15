import { createNestApp } from './create-app';

async function bootstrap(): Promise<void> {
  const app = await createNestApp();
  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port);
  console.log(`Telvri Security API Gateway is running. Swagger docs: http://localhost:${port}/docs`);
}

void bootstrap();
