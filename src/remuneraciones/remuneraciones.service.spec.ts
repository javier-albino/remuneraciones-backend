// src/remuneraciones/remuneraciones.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { RemuneracionesService } from './remuneraciones.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Remuneracion } from '../entities/remuneraciones'; // Asegúrate de que la ruta y nombre sean correctos

describe('RemuneracionesService', () => {
  let service: RemuneracionesService;

  const mockRemuneracionRepository = {
    find: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemuneracionesService,
        {
          provide: getRepositoryToken(Remuneracion),
          useValue: mockRemuneracionRepository,
        },
      ],
    }).compile();

    service = module.get<RemuneracionesService>(RemuneracionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
