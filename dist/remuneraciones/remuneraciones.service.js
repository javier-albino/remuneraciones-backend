"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemuneracionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const remuneraciones_1 = require("../entities/remuneraciones");
let RemuneracionesService = class RemuneracionesService {
    constructor(remuneracionRepository) {
        this.remuneracionRepository = remuneracionRepository;
    }
    async findAll() {
        try {
            return await this.remuneracionRepository.find({
                relations: ['usuario', 'deducciones'],
            });
        }
        catch (error) {
            console.error('Error al obtener todas las remuneraciones:', error);
            throw new common_1.HttpException('Error al obtener todas las remuneraciones', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const remuneracion = await this.remuneracionRepository.findOne({
                where: { id },
                relations: ['usuario', 'deducciones'],
            });
            if (!remuneracion) {
                throw new common_1.NotFoundException(`La remuneración con ID ${id} no existe`);
            }
            return remuneracion;
        }
        catch (error) {
            console.error('Error al obtener la remuneración:', error);
            throw new common_1.HttpException('Error al obtener la remuneración', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(data) {
        try {
            if (data.monto_bruto === undefined) {
                throw new common_1.HttpException('El campo monto_bruto es obligatorio', common_1.HttpStatus.BAD_REQUEST);
            }
            const deducciones = [
                {
                    descripcion: 'AFP',
                    monto: data.monto_bruto * 0.10,
                },
                {
                    descripcion: 'Salud',
                    monto: data.monto_bruto * 0.07,
                },
                {
                    descripcion: 'Seguro Cesantía',
                    monto: data.monto_bruto * 0.006,
                },
            ];
            data.monto_deducciones = deducciones.reduce((total, deduccion) => total + deduccion.monto, 0);
            data.monto_neto = data.monto_bruto - data.monto_deducciones;
            const remuneracion = this.remuneracionRepository.create({
                ...data,
                deducciones,
            });
            return await this.remuneracionRepository.save(remuneracion);
        }
        catch (error) {
            console.error('Error al guardar la remuneración en la base de datos:', error);
            throw new common_1.HttpException('Error al crear la remuneración', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async delete(id) {
        try {
            const result = await this.remuneracionRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`La remuneración con ID ${id} no existe`);
            }
        }
        catch (error) {
            console.error('Error al eliminar la remuneración:', error);
            throw new common_1.HttpException('Error al eliminar la remuneración', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.RemuneracionesService = RemuneracionesService;
exports.RemuneracionesService = RemuneracionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(remuneraciones_1.Remuneracion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RemuneracionesService);
//# sourceMappingURL=remuneraciones.service.js.map