import { Usuario } from './usuarios';
import { Deduccion } from './deducciones';
export declare class Remuneracion {
    id: number;
    monto_bruto: number;
    monto_deducciones: number;
    monto_neto: number;
    fecha_pago: Date;
    usuario: Usuario;
    deducciones: Deduccion[];
}
