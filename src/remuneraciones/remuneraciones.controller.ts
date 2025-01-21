import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Param,
    ParseIntPipe,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { RemuneracionesService } from './remuneraciones.service';
  import { Remuneracion } from '../entities/remuneraciones';
  
  @Controller('remuneraciones')
  export class RemuneracionesController {
    constructor(private readonly remuneracionesService: RemuneracionesService) {}
  
    // Obtener todas las remuneraciones
    @Get()
    async findAll(): Promise<Remuneracion[]> {
      try {
        return await this.remuneracionesService.findAll();
      } catch (error) {
        console.error('Error al obtener las remuneraciones:', error);
        throw new HttpException(
          'Error al obtener las remuneraciones',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // Obtener una remuneración por ID
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Remuneracion> {
      try {
        const remuneracion = await this.remuneracionesService.findOne(id);
        if (!remuneracion) {
          throw new HttpException(
            `La remuneración con ID ${id} no existe`,
            HttpStatus.NOT_FOUND,
          );
        }
        return remuneracion;
      } catch (error) {
        console.error('Error al obtener la remuneración:', error);
        throw new HttpException(
          'Error al obtener la remuneración',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // Crear una nueva remuneración
    @Post()
    async create(@Body() data: Partial<Remuneracion>): Promise<Remuneracion> {
      try {
        // Validación de campos obligatorios
        if (!data.monto_bruto || !data.fecha_pago || !data.usuario?.id) {
          throw new HttpException(
            'Los campos monto_bruto, fecha_pago y usuario.id son obligatorios',
            HttpStatus.BAD_REQUEST,
          );
        }
  
        // Llamada al servicio para crear la remuneración
        return await this.remuneracionesService.create(data);
      } catch (error) {
        console.error('Error al crear la remuneración:', error);
        throw new HttpException(
          error.message || 'Error al crear la remuneración',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    // Eliminar una remuneración por ID
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
      try {
        await this.remuneracionesService.delete(id);
      } catch (error) {
        console.error('Error al eliminar la remuneración:', error);
        throw new HttpException(
          error.message || 'Error al eliminar la remuneración',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
  