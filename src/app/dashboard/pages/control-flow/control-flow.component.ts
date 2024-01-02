import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TittleComponent} from '@shared/tittle/tittle.component';

type Grade = 'A'|'B'|'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    FormsModule,
    TittleComponent
  ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  valorNota:string='A';
  showContent = signal(false);
  grade = signal<Grade>('A');
  frameworks =  signal(['Angular','Vue','Svelte','Qwik','React'])
  frameworks2 =  signal([])


  public toggleContent(){
    this.showContent.update(value => !value);
  }

  showValue(){
    console.log(this.valorNota);
  }


}
