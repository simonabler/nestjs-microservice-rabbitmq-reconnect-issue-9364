import { Module } from '@nestjs/common';
import { ConfigModule } from '../../../libs/config/src';
import { ConsumerController } from './consumer.controller';

@Module({
  controllers:[ConsumerController],
  imports: [ConfigModule],
})
export class ConsumerModule {}
