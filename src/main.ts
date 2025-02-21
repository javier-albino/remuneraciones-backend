import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Definir los orígenes permitidos (desarrollo y producción)
  const allowedOrigins = [
    'http://localhost:5173', // Desarrollo
    'https://publicar-aws.d3jgg0pv126bjm.amplifyapp.com', // Producción en AWS Amplify
  ];

  app.enableCors({
    origin: allowedOrigins, // Permite varias URLs
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si usas cookies o JWT con credenciales
  });

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
