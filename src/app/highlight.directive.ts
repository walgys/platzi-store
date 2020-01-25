import { Directive, ElementRef } from '@angular/core';
import { EventEmitter } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
  }

}
