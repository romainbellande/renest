export class AppConfig {
  static readonly APP_NAME = 'renest';
  static readonly PORT = parseInt(process.env.PORT, 10) || 3000;

  static readonly API_VERSION = 1;
  static readonly API_URL = `/api/v${ AppConfig.API_VERSION }`;

  static readonly CLIENT_PORT = 8080;
  static readonly ENV = process.env.NODE_ENV || 'development';

  static readonly MONGO_DB_NAME = 'bindex';
  static readonly MONGO_HOST = process.env.MONGO_HOST || 'localhost';
  static readonly MONGO_PORT = 27017;
  static readonly MONGO_URL = `mongodb://${AppConfig.MONGO_HOST}:${ AppConfig.MONGO_PORT }/${ AppConfig.MONGO_DB_NAME }`;

  static readonly POSTGRES_DB_NAME = 'renest';
  static readonly POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';
  static readonly POSTGRES_PORT = 5432;
  static readonly POSTGRES_USERNAME = 'postgres';
  static readonly POSTGRES_PASSWORD = '';
}
