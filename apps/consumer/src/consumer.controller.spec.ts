import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerController } from './consumer.controller';

describe('ConsumerController', () => {
  let consumerController: ConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerController],
    }).compile();

    consumerController = app.get<ConsumerController>(ConsumerController);
  });

  describe('root', () => {
  
  });
});
