import { Controller } from '@nestjs/common';
import { KafkaEvent } from './kafka-event.decorator';
import { Payload } from '@nestjs/microservices';

@Controller()
export class KafkaController {
  
  @KafkaEvent('topics')
  handleTopics(@Payload() payload: any) {
    console.log(`[KafkaEvent] Mensaje recibido: ${payload}`);
    if (payload % 2 === 0) {
        console.log(`${payload} es par`);
    } else {
        console.log(`${payload} es impar`);
    }
  }
}