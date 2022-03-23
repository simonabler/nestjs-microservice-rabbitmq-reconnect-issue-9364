import { Controller, Get, Inject } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller()
export class ProducerController {
  constructor(
    private readonly producerService: ProducerService,
    ) { }

  @Get()
  getPong() {
    return this.producerService.ping();
  }
}
