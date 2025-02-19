import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
export declare class AuthService {
    private readonly usuariosService;
    private readonly jwtService;
    constructor(usuariosService: UsuariosService, jwtService: JwtService);
    validateUser(correo: string, password: string): Promise<any>;
    login(user: any): Promise<{
        token: string;
    }>;
}
