import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from '../entities/roles';

@Controller('roles') // Ruta base: /roles
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  // Endpoint para obtener todos los roles
  @Get()
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  // Endpoint para crear un nuevo rol
  @Post()
  async create(@Body() role: Partial<Role>): Promise<Role> {
    return this.rolesService.create(role);
  }

  // Endpoint para eliminar un rol por ID
 // @Delete(':id')
  //async delete(@Param('id') id: number): Promise<void> {
   // return this.rolesService.delete(id);
  //}
}
