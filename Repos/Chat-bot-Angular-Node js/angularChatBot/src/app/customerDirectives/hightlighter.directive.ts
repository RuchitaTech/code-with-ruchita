import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlighter]'
})
export class HightlighterDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','Red');
    this.renderer.addClass(this.element.nativeElement, 'btn-success');
  }

}
