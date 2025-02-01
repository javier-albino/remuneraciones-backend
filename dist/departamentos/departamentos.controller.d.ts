import { DepartamentosService } from './departamentos.service';
import { Departamento } from '../entities/departamentos';
export declare class DepartamentosController {
    private readonly departamentosService;
    constructor(departamentosService: DepartamentosService);
    findAll(): Promise<Departamento[]>;
    create(departamento: Partial<Departamento>): Promise<Departamento>;
    delete(id: number): Promise<void>;
}
