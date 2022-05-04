import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../Shared/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
   @Input() product : Product = new Product();
   @Output() edited = new EventEmitter();
  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
  }
  updateProduct(){
   this.ps.updateProduct(this.product).subscribe(()=>this.edited.emit());
  }
}
