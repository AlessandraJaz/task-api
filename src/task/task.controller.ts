import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService ) {}

  @Get()
  findAll() {
    return 'Get all task';
  }

  @Get(':id')
  findOne() {
    return 'Get one task';
  }

  @Post()
  create() {
    return 'Create task'
  }

  @Delete(':id')
  delete() {
    return 'Delete task';
  }

  @Put(':id')
  update() {
    return 'Update task';
  }
}
