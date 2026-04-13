import { Injectable, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, Reflector } from '@nestjs/core';

@Injectable()
export class KafkaExplorerService implements OnModuleInit {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly reflector: Reflector,
  ) {}

  onModuleInit() {
    const providers = this.discoveryService.getProviders();

    providers.forEach((wrapper) => {
      const instance = wrapper.instance;
      if (!instance) return;

      const prototype = Object.getPrototypeOf(instance);

      Object.getOwnPropertyNames(prototype).forEach((methodName) => {
        const methodRef = prototype[methodName];

        const topic = this.reflector.get<string>(
          'KAFKA_EVENT',
          methodRef,
        );

        if (topic) {
          console.log(`📡 Found Kafka handler: ${topic}`);
        }
      });
    });
  }
}