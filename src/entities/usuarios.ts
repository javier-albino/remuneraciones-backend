import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from './roles'; // Importa la entidad Role
import { Departamento } from './departamentos'; // Importa la entidad Departamento
import { Remuneracion } from './remuneraciones'; // Importa la entidad Remuneracion (si aplica)

@Entity('usuarios') // Define el nombre de la tabla en la base de datos
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ length: 150, unique: true })
  correo: string;

  @Column({ length: 15, nullable: true })
  telefono: string;

  @Column()
  fecha_contratacion: Date;

  // Relación con la tabla Roles
  @ManyToOne(() => Role, { eager: true }) // Relación muchos-a-uno con carga automática
  @JoinColumn({ name: 'rol_id' }) // Define la clave foránea
  rol: Role;

  // Relación con la tabla Departamentos
  @ManyToOne(() => Departamento, { nullable: true, eager: true }) // Relación muchos-a-uno con carga automática
  @JoinColumn({ name: 'departamento_id' }) // Define la clave foránea
  departamento: Departamento;

  // Relación con la tabla Remuneraciones
  @OneToMany(() => Remuneracion, (remuneracion) => remuneracion.usuario, { cascade: true }) // Relación uno-a-muchos
  remuneraciones: Remuneracion[];
}
