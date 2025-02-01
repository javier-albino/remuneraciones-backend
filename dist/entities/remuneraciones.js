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
exports.Remuneracion = void 0;
const typeorm_1 = require("typeorm");
const usuarios_1 = require("./usuarios");
const deducciones_1 = require("./deducciones");
let Remuneracion = class Remuneracion {
};
exports.Remuneracion = Remuneracion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Remuneracion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Remuneracion.prototype, "monto_bruto", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, default: 0.0 }),
    __metadata("design:type", Number)
], Remuneracion.prototype, "monto_deducciones", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Remuneracion.prototype, "monto_neto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Remuneracion.prototype, "fecha_pago", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuarios_1.Usuario, (usuario) => usuario.remuneraciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuarios_1.Usuario)
], Remuneracion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deducciones_1.Deduccion, (deduccion) => deduccion.remuneracion, { cascade: true }),
    __metadata("design:type", Array)
], Remuneracion.prototype, "deducciones", void 0);
exports.Remuneracion = Remuneracion = __decorate([
    (0, typeorm_1.Entity)('remuneraciones')
], Remuneracion);
//# sourceMappingURL=remuneraciones.js.map