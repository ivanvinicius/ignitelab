import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app
    .listen(3333)
    .then(() => console.log('💲[Purchases] Server running on port: 3333'));
}

bootstrap();
