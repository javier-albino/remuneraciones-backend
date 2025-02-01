// src/departamentos/departamentos.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentosService } from './departamentos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Departamento } from '../entities/departamentos';

describe('DepartamentosService', () => {
  let service: DepartamentosService;

  // Creamos un mock del repositorio de Departamento
  const mockDepartamentoRepository = {
    find: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartamentosService,
        {
          provide: getRepositoryToken(Departamento),
          useValue: mockDepartamentoRepository,
        },
      ],
    }).compile();

    service = module.get<DepartamentosService>(DepartamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
