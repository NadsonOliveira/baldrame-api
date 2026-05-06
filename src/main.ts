import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './Orcamento/interfaces/http/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Baldrame API')
    .setDescription('API de Orçamentos e Catálogo')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);

  console.log(`🚀 Server running on http://localhost:3000`);
  console.log(`📚 Swagger running on http://localhost:3000/api`);
}
bootstrap();
