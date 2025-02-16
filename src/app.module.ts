import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RemuneracionesModule } from './remuneraciones/remuneraciones.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Cargar variables de entorno
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DATABASE_URL, // Usar la variable de entorno en Render
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', // ❗ Solo en desarrollo
    }),
    
    RolesModule,
    DepartamentosModule,
    UsuariosModule,
    RemuneracionesModule,
    AuthModule, // Importa el módulo de roles
  ],
})
export class AppModule {}
