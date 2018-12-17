import { Test, TestingModule } from '@nestjs/testing';
import { ComplexdbcallController } from './complexdbcall.controller';

describe('Complexdbcall Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ComplexdbcallController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ComplexdbcallController = module.get<ComplexdbcallController>(ComplexdbcallController);
    expect(controller).toBeDefined();
  });
});
