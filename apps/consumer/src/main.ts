import { NestFactory } from '@nestjs/core';
import { AppClusterService } from '../../../libs/config/src/app-cluster.service';
import { ConfigService } from '../../../libs/config/src';
import { ConsumerModule } from './consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(ConsumerModule);
  const config = app.get<ConfigService>(ConfigService);
  app.connectMicroservice(config.getServerOptions());
  await app.startAllMicroservices();
  await app.listen(3001);
}
AppClusterService.clusterize(bootstrap);

