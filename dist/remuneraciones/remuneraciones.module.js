"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemuneracionesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const remuneraciones_1 = require("../entities/remuneraciones");
const deducciones_1 = require("../entities/deducciones");
const remuneraciones_service_1 = require("./remuneraciones.service");
const remuneraciones_controller_1 = require("./remuneraciones.controller");
let RemuneracionesModule = class RemuneracionesModule {
};
exports.RemuneracionesModule = RemuneracionesModule;
exports.RemuneracionesModule = RemuneracionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([remuneraciones_1.Remuneracion, deducciones_1.Deduccion])],
        providers: [remuneraciones_service_1.RemuneracionesService],
        controllers: [remuneraciones_controller_1.RemuneracionesController],
    })
], RemuneracionesModule);
//# sourceMappingURL=remuneraciones.module.js.map