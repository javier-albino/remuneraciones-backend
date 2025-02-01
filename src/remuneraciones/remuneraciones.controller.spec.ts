import { Test, TestingModule } from '@nestjs/testing';
import { RemuneracionesController } from './remuneraciones.controller';
import { RemuneracionesService } from './remuneraciones.service';

describe('RemuneracionesController', () => {
  let controller: RemuneracionesController;

  // Creamos un mock del servicio con los métodos que utilice el controlador.
  const mockRemuneracionesService = {
    findAll: jest.fn().mockResolvedValue([]),
    create: jest.fn().mockResolvedValue({}),
    delete: jest.fn().mockResolvedValue(undefined),
    // Agrega aquí otros métodos si es necesario
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemuneracionesController],
      providers: [
        {
          provide: RemuneracionesService,
          useValue: mockRemuneracionesService,
        },
      ],
    }).compile();

    controller = module.get<RemuneracionesController>(RemuneracionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
