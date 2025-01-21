import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { Role } from '../entities/roles'; // Importa la entidad Role
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Role])], // Registra la entidad Role
  providers: [RolesService], // Registra el servicio
  controllers: [RolesController], // Registra el controlador
})
export class RolesModule {}
