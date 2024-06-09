import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { IUser } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({
    required: true,
  })
  user!: IUser;
  @Input({
    required: true,
  })
  selected: boolean = false;
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  // select = output<string>()
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() =>  `assets/users/${this.user.avatar}`);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
