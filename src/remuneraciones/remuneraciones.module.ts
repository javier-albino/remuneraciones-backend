import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remuneracion } from '../entities/remuneraciones';
import { Deduccion } from '../entities/deducciones';
import { RemuneracionesService } from './remuneraciones.service';
import { RemuneracionesController } from './remuneraciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Remuneracion, Deduccion])],
  providers: [RemuneracionesService],
  controllers: [RemuneracionesController],
})
export class RemuneracionesModule {}
