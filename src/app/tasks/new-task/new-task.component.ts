import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { IUser } from '../../user/user.model';
import { INewTask } from '../tasks.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) users: IUser[] = [];

  @Output() addTask = new EventEmitter<INewTask>();
  @Output() cancelAddTask = new EventEmitter<void>();

  constructor(private readonly tasksService: TasksService) { }

  // title = signal('');
  // summary = signal('');
  // dueDate = signal('');

  title = '';
  summary = '';
  dueDate = '';

  onAddTask() {
    this.addTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
  }

  onCancel() {
    this.cancelAddTask.emit();
  }
}
