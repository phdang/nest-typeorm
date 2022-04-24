import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3006,
  username: 'root',
  password: '123456',
  database: 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['src/migration/**/*{.ts,.js}'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
