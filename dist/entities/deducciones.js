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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deduccion = void 0;
const typeorm_1 = require("typeorm");
const remuneraciones_1 = require("./remuneraciones");
let Deduccion = class Deduccion {
};
exports.Deduccion = Deduccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Deduccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Deduccion.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Deduccion.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => remuneraciones_1.Remuneracion, (remuneracion) => remuneracion.deducciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'remuneracion_id' }),
    __metadata("design:type", remuneraciones_1.Remuneracion)
], Deduccion.prototype, "remuneracion", void 0);
exports.Deduccion = Deduccion = __decorate([
    (0, typeorm_1.Entity)('deducciones')
], Deduccion);
//# sourceMappingURL=deducciones.js.map