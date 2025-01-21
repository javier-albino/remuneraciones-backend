import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RemuneracionesModule } from './remuneraciones/remuneraciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '', // Sin contraseña
      database: 'remuneraciones',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolesModule,
    DepartamentosModule,
    UsuariosModule,
    RemuneracionesModule, // Importa el módulo de roles
  ],
})
export class AppModule {}
