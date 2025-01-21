import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from '../entities/departamentos';
import { DepartamentosService } from './departamentos.service';
import { DepartamentosController } from './departamentos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Departamento])], // Registra la entidad Departamento
  providers: [DepartamentosService], // Servicio de Departamentos
  controllers: [DepartamentosController], // Controlador de Departamentos
})
export class DepartamentosModule {}
