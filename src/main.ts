// import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception-filters/http.exception-filter';
// import { AllExceptionsFilter } from './exception-filters/all.exception-filter';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('tiny'));
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(port);
  console.log(`Listening on port ${port}`);
}
bootstrap();
