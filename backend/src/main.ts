import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  // Segurança
  app.use(helmet());

  // CORS
  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL') || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Trust proxy
  app.getHttpAdapter().getInstance().set('trust proxy', 1);

  // Porta
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);

  // Graceful shutdown
  process.on('SIGTERM', async () => {
    logger.log('Received SIGTERM. Shutting down gracefully...');
    await app.close();
    process.exit(0);
  });
}

bootstrap();