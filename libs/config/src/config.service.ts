import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigService {

    haproxy_server = false;
    haproxy_client = false;

    rabbitmq1;
    rabbitmq2;
    rabbitmq3;
    haproxy;

    constructor(private configService: NestConfigService) {

        this.haproxy_server = this.configService.get('haproxy_server');
        this.haproxy_client = this.configService.get('haproxy_client');

        this.rabbitmq1 = this.configService.get('rabbitmq1');
        this.rabbitmq2 = this.configService.get('rabbitmq2');
        this.rabbitmq3 = this.configService.get('rabbitmq3');
        this.haproxy = this.configService.get('haproxy');

        console.log(this.rabbitmq1)


    }

    public getServerOptions(): RmqOptions {


        let urls = this.haproxy_server ? [this.haproxy] : [this.rabbitmq3,this.rabbitmq2,this.rabbitmq1];

        return {
            transport: Transport.RMQ,
            options: {
                urls,
                queue: 'nestjs_microservice_test',
                queueOptions: {
                    durable: false,
                },
                socketOptions: {
                    heartbeatIntervalInSeconds: 2,
                    reconnectTimeInSeconds: 1
                }
            }
        }
    }

    public getClientOptions(): RmqOptions {
        let urls = this.haproxy_client ? [this.haproxy] : [this.rabbitmq3,this.rabbitmq2,this.rabbitmq1];
        return {
            transport: Transport.RMQ,
            options: {
                urls,
                queue: 'nestjs_microservice_test',
                queueOptions: {
                    durable: false,
                },
                socketOptions: {
                    heartbeatIntervalInSeconds: 2,
                    reconnectTimeInSeconds: 1
                }
            }
        }
    }
}
