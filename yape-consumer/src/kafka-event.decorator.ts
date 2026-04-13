import { EventPattern } from '@nestjs/microservices';

export const KafkaEvent = (topic: string): MethodDecorator => {
  return (target, key, descriptor) => {
    EventPattern(topic)(target, key, descriptor);
  };
};