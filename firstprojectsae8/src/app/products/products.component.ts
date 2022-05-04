import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../Shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 // providers:[ProductsService]
})
export class ProductsComponent implements OnInit {
  productList : Product[];
  prix : number ;
  product : Product=new Product();
  constructor(private ps:ProductsService) {}
  ngOnInit(): void {
    console.log("test routes");
   // this.productList=this.ps.getAllProducts(); //synchrone
   this.getAllProduct();
  }
  buyProduct(p:Product){
   // p.quantity=p.quantity-1;
    p.quantity -=1;
  }

  getColor(p:Product){
    if (p.quantity == 0){
      return 'red';
    }
    else{
      return 'green';
    }
  }

  likeProduct(p:number){
    this.productList[p].like +=1;
  }

  deleteProduct(p:Product){
    this.ps.deleteProduct(p).subscribe(res=>this.ps.getAllProductsFromDB().subscribe(res=>this.productList=res));

  }
  updateProduct(p:Product){
    this.product=p;
  }
  getAllProduct(){
    this.ps.getAllProductsFromDB().subscribe
    (res=>{this.productList=res, alert ('product edited successfully'), this.product=new Product()});
  }
}
