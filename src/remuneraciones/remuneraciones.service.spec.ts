import { Test, TestingModule } from '@nestjs/testing';
import { RemuneracionesService } from './remuneraciones.service';

describe('RemuneracionesService', () => {
  let service: RemuneracionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemuneracionesService],
    }).compile();

    service = module.get<RemuneracionesService>(RemuneracionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
