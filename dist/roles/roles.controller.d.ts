import { RolesService } from './roles.service';
import { Role } from '../entities/roles';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    findAll(): Promise<Role[]>;
    create(role: Partial<Role>): Promise<Role>;
}
