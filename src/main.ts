import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para o front-end
  app.enableCors({
    origin: 'http://localhost:5173', // Porta padrão do Vite
  });

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Microservice Chatbot')
    .setDescription('API do Microservice Chatbot')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  // Logger profissional
  const { Logger } = await import('@nestjs/common');
  Logger.log(`Microservice Chatbot iniciado em: http://localhost:${port}/docs`, 'Bootstrap');
}
bootstrap();
