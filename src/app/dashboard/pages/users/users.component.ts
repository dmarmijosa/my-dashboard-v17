import {Component, inject} from '@angular/core';
import {UsersService} from '@services/users.service';
import {TittleComponent} from '@shared/tittle/tittle.component';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  imports: [
    TittleComponent,
    RouterModule
  ],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public userService = inject(UsersService);

}
