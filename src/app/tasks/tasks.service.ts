import { Injectable } from "@angular/core";
import { INewTask } from "./tasks.model";
import { ITask } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: ITask[] = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : [] as ITask[];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: INewTask, userId: string) {
    this.tasks.push({
      ...task,
      id: `t${this.tasks.length + 1}`,
      userId
    });

    this.updateLocalStorage();
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.updateLocalStorage();
  }
}
