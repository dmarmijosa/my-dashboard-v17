import {Component, computed, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TittleComponent} from '@shared/tittle/tittle.component';
import {ActivatedRoute} from '@angular/router';
import {User} from '@interfaces/req-response';
import {toSignal} from '@angular/core/rxjs-interop';
import {switchMap} from 'rxjs';
import {UsersService} from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule,TittleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  // public user = signal<User | undefined>(undefined);
  public user= toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.userService.getUserById(id))
    )
  )
  //title Label
  titleLabel = computed( ()=> {
    if(this.user()){
      return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }
    return 'Información del usuario';
  })




  constructor() {
    //this.route.params.subscribe(resp=> console.log({resp}))
  }

}
