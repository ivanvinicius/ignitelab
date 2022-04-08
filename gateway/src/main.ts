import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .listen(3332)
    .then(() => console.log('⛩️ [Gateway] Server is running on port: 3332'));
}
bootstrap();
