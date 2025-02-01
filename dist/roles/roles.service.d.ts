import { Repository } from 'typeorm';
import { Role } from '../entities/roles';
export declare class RolesService {
    private readonly rolesRepository;
    constructor(rolesRepository: Repository<Role>);
    findAll(): Promise<Role[]>;
    create(role: Partial<Role>): Promise<Role>;
}
