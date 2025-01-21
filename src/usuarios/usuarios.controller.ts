import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '../entities/usuarios';

@Controller('usuarios') // Ruta base: /usuarios
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Post()
  create(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.create(usuario);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.usuariosService.delete(id);
  }
}
