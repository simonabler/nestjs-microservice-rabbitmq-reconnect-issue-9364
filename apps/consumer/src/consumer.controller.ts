import { Controller, Get, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  constructor(
    ) { }

    @MessagePattern({ cmd: 'ping' })
    pingRMQ(token: string) {
      return "pong";
    }
}
