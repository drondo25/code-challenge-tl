import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    console.log("========= START onModuleInit =========");
    this.kafkaClient.subscribeToResponseOf('topics');
    await this.kafkaClient.connect();
  }

  sendKafka(): string {
    console.log("========= START sendKafka =========");
    const topic = 'topics';

    this.kafkaClient.emit(topic, {
      key: 'hora',
      value: new Date().getSeconds(),
    });
    return '========= SUCCESS sendKafka =========';
  }
}
