import { UsuariosService } from './usuarios.service';
import { Usuario } from '../entities/usuarios';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<Usuario[]>;
    create(usuario: Partial<Usuario>): Promise<Usuario>;
    delete(id: number): Promise<void>;
}
