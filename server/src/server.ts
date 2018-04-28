import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import chalk from 'chalk';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// tslint:disable-next-line:no-var-requires
const history = require('connect-history-api-fallback');

import { AppConfig } from '../../common/config';
import { ApplicationModule } from './modules/app.module';

import { LoggingInterceptor } from './interceptors';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, 'public')));

  app.setGlobalPrefix(AppConfig.API_URL);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err,
    });
  });

  const options = new DocumentBuilder()
    .setTitle(AppConfig.APP_NAME)
    .setDescription('The cats API description')
    .setVersion(`v${ AppConfig.API_VERSION }`)
    .setBasePath(AppConfig.API_URL)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/doc', app, document);

  await app.listen(AppConfig.PORT)
    .then(() => {
      console.info(
        chalk.cyan('App') +
        chalk.green(' [') +
        chalk.blue(`${ AppConfig.APP_NAME }`) +
        chalk.green('] started on port'),
        chalk.green('[') +
        chalk.blue(AppConfig.PORT.toString()) +
        chalk.green('] ') +
        `http://localhost:${ AppConfig.PORT }`,
      );
    })
    .catch(console.error);
}
bootstrap();
