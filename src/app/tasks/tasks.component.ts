import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { ITask } from './task/task.model';
import { IUser } from '../user/user.model';
import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { INewTask } from './tasks.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) users: IUser[] = [];
  @Input({ required: true }) userId!: string;

  isAddingTask: boolean = false;

  constructor(private readonly tasksService: TasksService) {}

  onCompleteTask(id: string) {
    return this.tasksService.completeTask(id);
  }

  onToggleAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onAddTask(values: INewTask) {
    this.tasksService.addTask(values, this.userId);

    this.isAddingTask = false;
  }

  get selectedUserTasks(): ITask[] {
    return this.tasksService.getUserTasks(this.userId);
  }
}
