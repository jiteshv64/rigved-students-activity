import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products : any = [
    {name: "Mobile", brand:["Vivo", "Oppo", "One+"]},
    {name: "Laptops", brand:["HP", "DELL", "Lenovo", "Acer"]}
  ]
}
