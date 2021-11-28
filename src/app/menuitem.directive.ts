import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  constructor() { }

  @HostBinding ( 'class.item-orange' ) mostrar = false; /*1*/

  @HostListener('mouseover') onOver() { /*2*/
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut() {  /*3*/
    this.mostrar = false;
  }

}


