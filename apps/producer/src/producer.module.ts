import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '../../../libs/config/src';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';

@Module({
  imports: [ConfigModule],
  controllers: [ProducerController],
  providers: [ProducerService,
    {
      provide: 'AUTH_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create(
          configService.getClientOptions()
        );
      }
    },
  ]
})
export class ProducerModule { }
