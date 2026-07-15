import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'reflect-metadata';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Telvri Security API Gateway')
    .setDescription(
      'Developer-first Identity and Security Platform for real-time telco fraud mitigation, including SIM-swap intelligence for trusted application workflows.',
    )
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'X-API-Key',
        in: 'header',
        description: 'Developer live API key with the rt_live_ prefix.',
      },
      'X-API-Key',
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'API Key',
        description: 'Alternative bearer credential using Authorization: Bearer <KEY>.',
      },
      'Bearer',
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
  app.getHttpAdapter().get('/docs-json', (_request, response) => {
    response.json(document);
  });

  await app.listen(3000);
  console.log('Telvri Security API Gateway is running. Swagger docs: http://localhost:3000/docs');
}

void bootstrap();
