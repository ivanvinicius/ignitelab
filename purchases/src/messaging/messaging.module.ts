import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { KafkaService } from './kafka/kafka.service';

@Module({
  //leitura do .env e injeção configService nas dependências da classes
  imports: [ConfigModule.forRoot()],

  providers: [KafkaService],
  exports: [KafkaService],
})
export class MessagingModule {}
