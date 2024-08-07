import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const logger = new Logger('NestApplication');
  await app.listen(3000, () => {
    logger.log('Server is running on http://localhost:3000/api');
  });
}
bootstrap();
