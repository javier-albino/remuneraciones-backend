import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from './usuarios';
import { Deduccion } from './deducciones';

@Entity('remuneraciones') // Nombre de la tabla en la base de datos
export class Remuneracion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  monto_bruto: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0.0 })
  monto_deducciones: number;

  @Column('decimal', { precision: 10, scale: 2 })
  monto_neto: number;

  @Column()
  fecha_pago: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.remuneraciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @OneToMany(() => Deduccion, (deduccion) => deduccion.remuneracion, { cascade: true })
  deducciones: Deduccion[];
}
