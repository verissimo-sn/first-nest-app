import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 01', completed: false },
    { id: 2, description: 'Tarefa 02', completed: false },
    { id: 3, description: 'Tarefa 03', completed: false },
    { id: 4, description: 'Tarefa 04', completed: false },
    { id: 5, description: 'Tarefa 05', completed: false },
    { id: 6, description: 'Tarefa 06', completed: false },
    { id: 7, description: 'Tarefa 07', completed: false },
    { id: 8, description: 'Tarefa 08', completed: false },
    { id: 9, description: 'Tarefa 09', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((item) => item.id == id);
    return task;
  }

  create(task: Task) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
