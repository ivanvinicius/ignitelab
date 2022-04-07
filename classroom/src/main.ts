import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Configuração do Kafka para microserviços que apenas consomem informações
   * dos topics
   */
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'classroom',
        brokers: ['localhost:29092'],
      },
    },
  });

  app
    .startAllMicroservices()
    .then(() => console.log('🔥 [Classroom] Microservice running'));

  app
    .listen(3334)
    .then(() => console.log('🚀 [Classroom] Server running on port: 3334'));
}

bootstrap();
