import { Component, computed } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
import { IUser } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
