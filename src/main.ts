import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { App } from './app';
import { appConfig } from './configs';

setImmediate(async ()=>{
  const app = await NestFactory.create<INestApplication>(App);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(appConfig.port);
})
