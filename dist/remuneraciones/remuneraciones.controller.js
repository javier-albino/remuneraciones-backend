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
exports.RemuneracionesController = void 0;
const common_1 = require("@nestjs/common");
const remuneraciones_service_1 = require("./remuneraciones.service");
let RemuneracionesController = class RemuneracionesController {
    constructor(remuneracionesService) {
        this.remuneracionesService = remuneracionesService;
    }
    async findAll() {
        try {
            return await this.remuneracionesService.findAll();
        }
        catch (error) {
            console.error('Error al obtener las remuneraciones:', error);
            throw new common_1.HttpException('Error al obtener las remuneraciones', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const remuneracion = await this.remuneracionesService.findOne(id);
            if (!remuneracion) {
                throw new common_1.HttpException(`La remuneración con ID ${id} no existe`, common_1.HttpStatus.NOT_FOUND);
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
            if (!data.monto_bruto || !data.fecha_pago || !data.usuario?.id) {
                throw new common_1.HttpException('Los campos monto_bruto, fecha_pago y usuario.id son obligatorios', common_1.HttpStatus.BAD_REQUEST);
            }
            return await this.remuneracionesService.create(data);
        }
        catch (error) {
            console.error('Error al crear la remuneración:', error);
            throw new common_1.HttpException(error.message || 'Error al crear la remuneración', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async delete(id) {
        try {
            await this.remuneracionesService.delete(id);
        }
        catch (error) {
            console.error('Error al eliminar la remuneración:', error);
            throw new common_1.HttpException(error.message || 'Error al eliminar la remuneración', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.RemuneracionesController = RemuneracionesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RemuneracionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RemuneracionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RemuneracionesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RemuneracionesController.prototype, "delete", null);
exports.RemuneracionesController = RemuneracionesController = __decorate([
    (0, common_1.Controller)('remuneraciones'),
    __metadata("design:paramtypes", [remuneraciones_service_1.RemuneracionesService])
], RemuneracionesController);
//# sourceMappingURL=remuneraciones.controller.js.map