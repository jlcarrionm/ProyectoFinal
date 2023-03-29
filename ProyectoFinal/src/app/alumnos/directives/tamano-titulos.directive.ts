import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTamanoTitulos]'
})
export class TamanoTitulosDirective {


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,

  ) {
    renderer.setStyle(element.nativeElement, 'font-size', '20px');
  }

}
