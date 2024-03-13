import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
