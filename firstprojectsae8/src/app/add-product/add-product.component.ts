import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../Shared/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 product:Product=new Product();
  constructor(private ps:ProductsService, private myrouter:Router) { }

  ngOnInit(): void {
  }
  log(errors){
    console.log(errors);
  }
  addProduct(){
   this.ps.addProduct(this.product).subscribe(res=>this.myrouter.navigateByUrl("/products"));
  }
}
