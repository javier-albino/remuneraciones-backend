import { RemuneracionesService } from './remuneraciones.service';
import { Remuneracion } from '../entities/remuneraciones';
export declare class RemuneracionesController {
    private readonly remuneracionesService;
    constructor(remuneracionesService: RemuneracionesService);
    findAll(): Promise<Remuneracion[]>;
    findOne(id: number): Promise<Remuneracion>;
    create(data: Partial<Remuneracion>): Promise<Remuneracion>;
    delete(id: number): Promise<void>;
}
