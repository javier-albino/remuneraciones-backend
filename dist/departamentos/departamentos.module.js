"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const departamentos_1 = require("../entities/departamentos");
const departamentos_service_1 = require("./departamentos.service");
const departamentos_controller_1 = require("./departamentos.controller");
let DepartamentosModule = class DepartamentosModule {
};
exports.DepartamentosModule = DepartamentosModule;
exports.DepartamentosModule = DepartamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([departamentos_1.Departamento])],
        providers: [departamentos_service_1.DepartamentosService],
        controllers: [departamentos_controller_1.DepartamentosController],
    })
], DepartamentosModule);
//# sourceMappingURL=departamentos.module.js.map