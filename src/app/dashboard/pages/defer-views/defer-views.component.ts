import { Component } from '@angular/core';
import {HeavyLoadersSlowComponent} from '@shared/heavy-loaders/heavy-loaders-slow.component';
import {TittleComponent} from '@shared/tittle/tittle.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    HeavyLoadersSlowComponent,
    TittleComponent
  ],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
