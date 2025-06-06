import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['*'], // Frontend URLs
    credentials: true, // If you're using cookies or auth headers
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  app.use(helmet());
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
