import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/db.connection';

//Modules
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
