import chalk from 'chalk';
import { createConnection } from 'typeorm';

import { AppConfig } from '../../../../common/config';

export const databaseProviders = [
  {
    provide: 'DbPostgresConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: AppConfig.POSTGRES_HOST,
      port: AppConfig.POSTGRES_PORT,
      username: AppConfig.POSTGRES_USERNAME,
      password: AppConfig.POSTGRES_PASSWORD,
      database: AppConfig.POSTGRES_DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  },
];
