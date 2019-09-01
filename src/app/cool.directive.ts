import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCool]'
})
export class CoolDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.fontWeight = "bolder";
  }

}
