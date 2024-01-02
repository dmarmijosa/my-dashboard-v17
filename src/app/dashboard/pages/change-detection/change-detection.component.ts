import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TittleComponent} from '@shared/tittle/tittle.component';

@Component({
  selector: 'app-change-deteccion',
  standalone: true,
  imports: [CommonModule, TittleComponent,],
  changeDetection:ChangeDetectionStrategy.OnPush,
  template: `
    <app-tittle [title]="currentFrameWork()"/>

    <pre>{{frameworkAsSignal() |json}}</pre>
    <pre class="mt-5">{{frameworkAsProperty | json}}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {
  currentFrameWork =  computed(
    ()=> `Change detection - ${this.frameworkAsSignal().name}`
  )

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })
  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    setTimeout(()=>{
      //this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(value => {
        value.name='React';
        return {...value};
      })

      console.log('Hecho')
    },3000);
  }

}
