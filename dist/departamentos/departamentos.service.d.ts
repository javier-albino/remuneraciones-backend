import { Repository } from 'typeorm';
import { Departamento } from '../entities/departamentos';
export declare class DepartamentosService {
    private readonly departamentosRepository;
    constructor(departamentosRepository: Repository<Departamento>);
    findAll(): Promise<Departamento[]>;
    create(departamento: Partial<Departamento>): Promise<Departamento>;
    delete(id: number): Promise<void>;
}
