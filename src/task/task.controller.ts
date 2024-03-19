import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO } from 'src/dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService ) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateTaskDTO) {
    return this.taskService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.taskService.update(id, body);
  }
}
