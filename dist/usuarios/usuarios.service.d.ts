import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuarios';
export declare class UsuariosService {
    private readonly usuariosRepository;
    constructor(usuariosRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findByEmail(correo: string): Promise<Usuario | null>;
    create(usuario: Partial<Usuario>): Promise<Usuario>;
    delete(id: number): Promise<void>;
}
