import { Module } from '@nestjs/common';

//Modules
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './config/database.module';

@Module({
  imports: [TasksModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
