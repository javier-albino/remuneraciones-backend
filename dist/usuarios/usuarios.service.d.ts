import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuarios';
export declare class UsuariosService {
    private readonly usuariosRepository;
    constructor(usuariosRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    create(usuario: Partial<Usuario>): Promise<Usuario>;
    delete(id: number): Promise<void>;
}
