import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({
    origin: 'http://localhost:5173', 
    });
  await app.listen(3333,'0.0.0.0');
  console.log('✅ Server listening on http://localhost:3333');
}
bootstrap();
