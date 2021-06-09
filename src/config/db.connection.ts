import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'oracle',
  host: '10.200.1.202',
  port: 1521,
  username: 'cnp',
  password: 'ninguemsabe',
  database: 'apltst.grupognc.local',
  autoLoadEntities: true,
  synchronize: true,
};
