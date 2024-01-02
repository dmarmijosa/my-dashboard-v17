import {Injectable} from '@angular/core';

interface State {
  user: any[];
  loading: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor() {
  }
}
