import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[colBack]',
})
export class Shared2Directive {
  @Input() set colBack(val: number) {
    if (!val) this.element.nativeElement.style.backgroundColor = 'red';
    else if (!this.colBack)
      this.element.nativeElement.style.backgroundColor = 'orange';
  }

  constructor(elemen: ElementRef) {}

  ngOnChanges() {}
}
