import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3006,
  username: 'root',
  password: '123456',
  database: 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/migration/**/*{.ts,.js}'],
};
export default config;
