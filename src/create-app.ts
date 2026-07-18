import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Express } from 'express';
import helmet from 'helmet';
import { join } from 'path';

import { AppModule } from './app.module';

// cookie-parser is a CommonJS module that exports a function directly, so it must
// be imported with import-require to avoid an undefined `.default` at runtime.
import cookieParser = require('cookie-parser');

const SWAGGER_UI_DIST_PATH = join(__dirname, 'swagger-ui-dist');

export async function configureNestApp(app: INestApplication): Promise<void> {
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    }),
  );
  app.use(cookieParser());

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
  SwaggerModule.setup('/docs', app, document, {
    customSwaggerUiPath: SWAGGER_UI_DIST_PATH,
    customSiteTitle: 'Telvri Security API Gateway',
  });
  app.getHttpAdapter().get('/docs-json', (_request, response) => {
    response.json(document);
  });
}

export async function createNestApp(expressInstance?: Express): Promise<NestExpressApplication> {
  const app = expressInstance
    ? await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(expressInstance))
    : await NestFactory.create<NestExpressApplication>(AppModule);

  await configureNestApp(app);
  await app.init();
  return app;
}
