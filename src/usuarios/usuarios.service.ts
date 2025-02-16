import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuarios';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find({ relations: ['rol', 'departamento'] });
  }

  async findByEmail(correo: string): Promise<Usuario | null> {
    return this.usuariosRepository.findOne({
      where: { correo },
      select: ['id', 'correo', 'password'], // 🔒 Incluir password en la consulta
      relations: ['rol', 'departamento'],
    });
  }

  create(usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosRepository.save(usuario);
  }

  async delete(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}
