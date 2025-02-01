import { Repository } from 'typeorm';
import { Remuneracion } from '../entities/remuneraciones';
export declare class RemuneracionesService {
    private readonly remuneracionRepository;
    constructor(remuneracionRepository: Repository<Remuneracion>);
    findAll(): Promise<Remuneracion[]>;
    findOne(id: number): Promise<Remuneracion>;
    create(data: Partial<Remuneracion>): Promise<Remuneracion>;
    delete(id: number): Promise<void>;
}
