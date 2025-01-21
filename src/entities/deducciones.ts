import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Remuneracion } from './remuneraciones';

@Entity('deducciones') // Define el nombre de la tabla en la base de datos
export class Deduccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  descripcion: string; // Ejemplo: AFP, Salud, Seguro de Cesantía

  @Column('decimal', { precision: 10, scale: 2 })
  monto: number;

  // Relación con la tabla de remuneraciones
  @ManyToOne(() => Remuneracion, (remuneracion) => remuneracion.deducciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'remuneracion_id' })
  remuneracion: Remuneracion;
}
