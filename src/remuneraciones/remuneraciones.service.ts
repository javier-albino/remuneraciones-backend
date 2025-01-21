import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Remuneracion } from '../entities/remuneraciones';

@Injectable()
export class RemuneracionesService {
  constructor(
    @InjectRepository(Remuneracion)
    private readonly remuneracionRepository: Repository<Remuneracion>,
  ) {}

  // Obtener todas las remuneraciones
  async findAll(): Promise<Remuneracion[]> {
    try {
      return await this.remuneracionRepository.find({
        relations: ['usuario', 'deducciones'], // Incluye relaciones necesarias
      });
    } catch (error) {
      console.error('Error al obtener todas las remuneraciones:', error);
      throw new HttpException(
        'Error al obtener todas las remuneraciones',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Obtener una remuneración por ID
  async findOne(id: number): Promise<Remuneracion> {
    try {
      const remuneracion = await this.remuneracionRepository.findOne({
        where: { id },
        relations: ['usuario', 'deducciones'], // Incluye relaciones necesarias
      });

      if (!remuneracion) {
        throw new NotFoundException(`La remuneración con ID ${id} no existe`);
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
  async create(data: Partial<Remuneracion>): Promise<Remuneracion> {
    try {
      // Validar si monto_bruto está presente
      if (data.monto_bruto === undefined) {
        throw new HttpException(
          'El campo monto_bruto es obligatorio',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Generar deducciones desglosadas
      const deducciones = [
        {
          descripcion: 'AFP',
          monto: data.monto_bruto * 0.10, // 10% para AFP
        },
        {
          descripcion: 'Salud',
          monto: data.monto_bruto * 0.07, // 7% para Salud
        },
        {
          descripcion: 'Seguro Cesantía',
          monto: data.monto_bruto * 0.006, // 0.6% para Seguro de Cesantía
        },
      ];

      // Calcular monto_deducciones total
      data.monto_deducciones = deducciones.reduce((total, deduccion) => total + deduccion.monto, 0);

      // Calcular monto_neto
      data.monto_neto = data.monto_bruto - data.monto_deducciones;

      // Crear la entidad de remuneración
      const remuneracion = this.remuneracionRepository.create({
        ...data,
        deducciones, // Asignar deducciones desglosadas
      });

      // Guardar la remuneración y las deducciones relacionadas
      return await this.remuneracionRepository.save(remuneracion);
    } catch (error) {
      console.error('Error al guardar la remuneración en la base de datos:', error);
      throw new HttpException(
        'Error al crear la remuneración',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Eliminar una remuneración
  async delete(id: number): Promise<void> {
    try {
      const result = await this.remuneracionRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`La remuneración con ID ${id} no existe`);
      }
    } catch (error) {
      console.error('Error al eliminar la remuneración:', error);
      throw new HttpException(
        'Error al eliminar la remuneración',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
