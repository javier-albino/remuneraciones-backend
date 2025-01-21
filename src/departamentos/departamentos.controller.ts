import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { Departamento } from '../entities/departamentos';

@Controller('departamentos') // Ruta base: /departamentos
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  @Get()
  findAll(): Promise<Departamento[]> {
    return this.departamentosService.findAll();
  }

  @Post()
  create(@Body() departamento: Partial<Departamento>): Promise<Departamento> {
    return this.departamentosService.create(departamento);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.departamentosService.delete(id);
  }
}
