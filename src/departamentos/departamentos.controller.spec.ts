import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentosController } from './departamentos.controller';
import { DepartamentosService } from './departamentos.service';

describe('DepartamentosController', () => {
  let controller: DepartamentosController;

  // Creamos un mock del servicio, definiendo los métodos que el controlador utiliza.
  const mockDepartamentosService = {
    findAll: jest.fn().mockResolvedValue([]),
    create: jest.fn().mockResolvedValue({}),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartamentosController],
      providers: [
        {
          provide: DepartamentosService,
          useValue: mockDepartamentosService,
        },
      ],
    }).compile();

     controller = module.get<DepartamentosController>(DepartamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
