import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('departamentos') // Nombre de la tabla en la base de datos
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;
}
