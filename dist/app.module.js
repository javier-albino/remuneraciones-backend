"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roles_module_1 = require("./roles/roles.module");
const departamentos_module_1 = require("./departamentos/departamentos.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const remuneraciones_module_1 = require("./remuneraciones/remuneraciones.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                url: process.env.DATABASE_URL,
                autoLoadEntities: true,
                synchronize: process.env.NODE_ENV !== 'production',
            }),
            roles_module_1.RolesModule,
            departamentos_module_1.DepartamentosModule,
            usuarios_module_1.UsuariosModule,
            remuneraciones_module_1.RemuneracionesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map