import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Habilitar CORS para permitir conexiones desde React
  app.enableCors({
    origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si usas cookies o autenticación con sesión
  });

  await app.listen(3000, '0.0.0.0');
}

bootstrap();