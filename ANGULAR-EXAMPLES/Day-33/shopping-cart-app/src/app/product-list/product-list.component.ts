import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
    { product: 'Laptop', price: 52000 },
    { product: 'Mobile', price: 30000 },
    { product: 'Gyser', price: 50000 },
  ];

  @Output()
  data: EventEmitter<number> = new EventEmitter<number>();
  counter = 0;

  @Output()
  price1: EventEmitter<number> = new EventEmitter<number>();
  p1 = 0;

  add(price: number): void {
    this.p1 = this.p1 + price;
    this.price1.emit(this.p1);

    this.counter = this.counter + 1;
    this.data.emit(this.counter);
  }

  remove(price:number):void{
    this.p1=this.p1-price;
    this.price1.emit(this.p1);

    this.counter=this.counter-1;
    this.data.emit(this.counter);

  }

}
