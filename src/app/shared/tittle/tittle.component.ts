import {booleanAttribute, Component, Input} from '@angular/core';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-tittle',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  template: `
    <h1 class="text-3xl mb-3">{{title | titlecase}} </h1>
  `,
  styles: ``
})
export class TittleComponent {
  @Input({required:true}) title='';
  @Input({transform: booleanAttribute}) withShadow :boolean = false;
}
