import { Role } from './roles';
import { Departamento } from './departamentos';
import { Remuneracion } from './remuneraciones';
export declare class Usuario {
    id: number;
    nombre: string;
    correo: string;
    telefono: string;
    fecha_contratacion: Date;
    password: string;
    rol: Role;
    departamento: Departamento;
    remuneraciones: Remuneracion[];
}
