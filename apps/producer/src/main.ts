import { NestFactory } from '@nestjs/core';
import { AppClusterService } from '../../../libs/config/src/app-cluster.service';
import { ProducerModule } from './producer.module';

async function bootstrap() {
  const app = await NestFactory.create(ProducerModule);
  await app.listen(3000);
}
AppClusterService.clusterize(bootstrap);