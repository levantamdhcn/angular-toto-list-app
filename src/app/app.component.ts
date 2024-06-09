import { Component, computed } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
import { dummyTasks } from './dummy-tasks';
import { ITask } from './tasks/task/task.model';
import { IUser } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
})
export class AppComponent {
  users: IUser[] = DUMMY_USERS;
  selectedUserId: string | null = null;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  isUserSelected(id: string): boolean {
    return this.selectedUserId === id;
  }

  get selectedUser(): IUser | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
