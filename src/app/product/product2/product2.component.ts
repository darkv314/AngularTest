import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
})
export class Product2Component implements OnInit {
  @Input() name!: string;
  @Input() size!: number;
  @Input() stock!: number;
  @Input() type!: string;
  @Output() stockChange = new EventEmitter<number>();

  comprar() {
    this.stockChange.emit(this.stock - 1);
  }

  constructor() {}

  ngOnInit() {}
}
