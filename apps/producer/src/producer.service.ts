import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';

@Injectable()
export class ProducerService {


  constructor(@Inject('AUTH_SERVICE') private readonly client: ClientProxy) { }

  ping() {
    const pattern = { cmd: 'ping' };
    return firstValueFrom(this.client.send(pattern, "").pipe(timeout(5000)));
  }

}
