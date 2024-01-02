import { Component } from '@angular/core';
import {TittleComponent} from '@shared/tittle/tittle.component';
import {HeavyLoadersFastComponent} from '@shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    TittleComponent,
    HeavyLoadersFastComponent
  ],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
