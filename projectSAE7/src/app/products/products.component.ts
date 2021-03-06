import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[]
})
export class ProductsComponent implements OnInit {
  product : Product=new Product();
  prop1 : number = 50;
  listProduct : Product[]=[];
  update = false;
    decrement(p:Product){
      p.quantity=p.quantity-1;
    }
    like(i:number){
     this.listProduct[i].like+=1; 
    }
    like2(i:number, nb:number){
      this.listProduct[i].like+=nb; 
     }
    constructor(private ps:ProductService) { }

  ngOnInit(): void {
   // this.listProduct=this.ps.getAllProducts();//méthode synchrone
   this.ps.getAllProducts().subscribe(res=>this.listProduct=res);
  }
  addProductFromService(){
    this.ps.AddProduct({
      "id": 7,
      "title": "T-shirt 2",
      "price": 18,
      "quantity": 0,
      "like": 0
    }).subscribe(res=>this.ps.getAllProducts().subscribe(res=>this.listProduct=res));
  }
  addProduct(){
    this.update=false;
    console.log(this.product);
    this.ps.AddProduct(this.product).subscribe(res=>this.ps.getAllProducts().subscribe(res=>this.listProduct=res));
  }
  deleteProduct(p:Product){
    this.ps.deleteProduct(p).subscribe(res=>this.ps.getAllProducts().subscribe(res=>this.listProduct=res));
  }

  getProduct(p){
this.product=p;
this.update=true;
  }

  updateP(){
    this.ps.UpdateProduct(this.product).subscribe();
    this.product=new Product();
    this.update=false;
  }

}
