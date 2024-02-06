import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //filters out invalid properties
      transform: true, //auto transform payload in post or update.dddddd
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
