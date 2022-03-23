
# NestJS Minimum reproduction code Issue #9364
[Issue](https://github.com/nestjs/nest/issues/9364)
## Description

## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# development
$ npm run start:all
```

## Running the app with Docker

Requirements:
 * Docker
 * docker-compose

```bash
$ npm run test:docker:up
```

## Testcase 1 at Startup
* First Terminal: `npm run test:docker:up`
* First Terminal: Kill RabbitMQ node 3: `npm run test:testcase1`
* Second Terminal: `npm run test:curl`   

=> First Terminal: EAI_AGAIN error => no connection 

## Testcase 2 after Startup
* First Terminal: `npm run test:docker:up`
* First Terminal: `npm run test:prepare` 
* Second Terminal: `npm run test:curl`  => pong is shown
* Second Terminal: After everything is connected, kill RabbitMQ node 3: `npm run test:testcase2`, 
* Second Terminal: `npm run test:curl` 

=> First Terminal: EAI_AGAIN error => no reconnect 






## Expected behavior
### Testcase 1
AmqpConnectionManager from producer reconnects to the next Broker and Nestjs should send to the new connected broker at startup. 

### Testcase 2
AmqpConnectionManager from producer reconnects to the next Broker and Nestjs should send to the new connected broker.