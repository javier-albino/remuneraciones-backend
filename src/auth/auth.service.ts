import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service'; // Asegúrate de importar tu servicio de usuarios
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(correo: string, password: string): Promise<any> {
    console.log('🔍 Buscando usuario con correo:', correo);
    const user = await this.usuariosService.findByEmail(correo);

    if (!user) {
      console.error('⚠ Usuario no encontrado');
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.error('⚠ Contraseña incorrecta');
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    console.log('✅ Usuario autenticado:', user.correo);
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async login(user: any) {
    const payload = { sub: user.id, correo: user.correo };
    return {
      token: this.jwtService.sign(payload), // 🔹 Cambiado a "token"
    };
  }
}
