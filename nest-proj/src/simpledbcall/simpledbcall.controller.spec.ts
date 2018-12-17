import { Test, TestingModule } from '@nestjs/testing';
import { SimpledbcallController } from './simpledbcall.controller';

describe('Simpledbcall Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SimpledbcallController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SimpledbcallController = module.get<SimpledbcallController>(SimpledbcallController);
    expect(controller).toBeDefined();
  });
});
