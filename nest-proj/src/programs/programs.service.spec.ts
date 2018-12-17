import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsService } from './programs.service';

describe('ProgramsService', () => {
  let service: ProgramsService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramsService],
    }).compile();
    service = module.get<ProgramsService>(ProgramsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
