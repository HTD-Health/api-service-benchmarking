import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsController } from './programs.controller';

describe('Programs Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProgramsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProgramsController = module.get<ProgramsController>(ProgramsController);
    expect(controller).toBeDefined();
  });
});
