import { Test, TestingModule } from '@nestjs/testing';
import { RemuneracionesController } from './remuneraciones.controller';

describe('RemuneracionesController', () => {
  let controller: RemuneracionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemuneracionesController],
    }).compile();

    controller = module.get<RemuneracionesController>(RemuneracionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
