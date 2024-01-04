import {computed, inject, Injectable, signal} from '@angular/core';
import type {User, UserResponse, UsersResponse} from '@interfaces/req-response';
import {HttpClient} from '@angular/common/http';
import {delay, map} from 'rxjs';

interface State {
  users: User[];
  loading: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  #state = signal<State>({
    loading: true,
    users: []
  })

  public user = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {

    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(3500))
      .subscribe({
        next: (resp) => {
          this.#state.set({
            loading: false,
            users: resp.data
          })
        }
      })
  }

  getUserById(id:string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(3500),
        map(resp => resp.data)
      )

  }
}
