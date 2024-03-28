import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

 @HostBinding('style.backgroundColor') background : string = 'transparent';
//  console.log("background**", background);
  constructor( private element: ElementRef, private renderer: Renderer2) { }

 @HostListener('mouseenter') onMouseHover(){
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');
    this.background = 'pink';
  }
  @HostListener('mouseleave') onMouseOut(){
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');
    this.background = 'transparent';
  }

}
