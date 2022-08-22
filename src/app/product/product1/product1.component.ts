import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css'],
})
export class Product1Component implements OnInit {
  @Input() name!: string;
  @Input() size!: number;
  @Input() stock!: number;
  @Input() type!: string;
  @Output() stockChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  comprar() {
    this.stockChange.emit(this.stock - 1);
  }
}
