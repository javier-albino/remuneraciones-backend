// Importamos las herramientas necesarias para crear el módulo de test.
import { Test, TestingModule } from '@nestjs/testing';

// Importamos el servicio que vamos a testear.

import { DepartamentosService } from './departamentos.service';

// Importamos la función para obtener el token del repositorio y la entidad Departamento.
import { getRepositoryToken } from '@nestjs/typeorm';
import { Departamento } from '../entities/departamentos';


describe('DepartamentosService', () => {
  let service: DepartamentosService;
  
  // Creamos un mock para simular el repositorio de Departamento.
  // En un test unitario no queremos conectarnos a una base de datos real,
  // por lo que definimos los métodos que el servicio pueda llamar (find, save, delete, etc.).
  
  
  const mockDepartamentoRepository = {
    
    find: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    // Creamos un TestingModule para el test.
    // Aquí se declara que el proveedor DepartamentosService se usará,
    // y que para la inyección de dependencia del repositorio de Departamento,
    // se utilizará el objeto mockDepartamentoRepository.
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartamentosService,
        {
          provide: getRepositoryToken(Departamento),
          
          useValue: mockDepartamentoRepository,
        },
      ],
    }).compile();

    // Obtenemos la instancia del servicio desde el módulo de test.
    service = module.get<DepartamentosService>(DepartamentosService);
  });

  // Prueba básica para confirmar que el servicio se ha instanciado correctamente.
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
