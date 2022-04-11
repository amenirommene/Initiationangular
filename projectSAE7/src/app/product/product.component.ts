import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myParam: number;
  product : Product;
  constructor(private ac:ActivatedRoute, private ps:ProductService) {}

  ngOnInit(): void { //méthode hook
    //this.myParam=this.ac.snapshot.params.id;
  this.ac.paramMap.subscribe(res=>{this.myParam=Number(res.get('id')),this.ps.getProductById(this.myParam).subscribe(res=>this.product=res)});
  
  }

}
