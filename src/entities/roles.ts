import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles') // Asociada con la tabla 'roles'
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;
}
