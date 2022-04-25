import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-mon-fils-product',
  templateUrl: './mon-fils-product.component.html',
  styleUrls: ['./mon-fils-product.component.css']
})
export class MonFilsProductComponent implements OnInit {
  @Input() prop:number;
  @Input() i:number;
  @Input() p : Product;
  @Output() notified = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.prop);
  }
  like (){
    this.notified.emit();
  }
  ngOnChanges(changes:SimpleChange){
    console.log(changes);
  }

  like2 (nb : string){
    this.notified.emit(Number(nb));
  }

}
