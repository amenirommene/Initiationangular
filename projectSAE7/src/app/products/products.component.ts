import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prop1 : number = 50;
  listProduct : Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
    decrement(p:Product){
      p.quantity=p.quantity-1;
    }
    like(i:number){
     this.listProduct[i].like+=1; 
    }
    constructor() { }

  ngOnInit(): void {
  }

}
