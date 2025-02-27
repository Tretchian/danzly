import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  //sapp.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*', // Разрешаем доступ с любого домена (лучше указать конкретный)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });


  const config = new DocumentBuilder()
  .setTitle('SANDB[]X API')
  .setDescription('API description')
  .setVersion('1.0')
  .build();
  
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document,{
  swaggerOptions: {
    persistAuthorization: true,
    tagsSorter: 'alpha',
  },
});
const port = parseInt(process.env.PORT || '3000');
console.log('port = ', process.env.PORT);
const server = process.env.SERVER;
await app.listen(port, server || '0.0.0.0');

console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
