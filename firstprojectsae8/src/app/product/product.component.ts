import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myParam;
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {

   this.myParam= this.ac.snapshot.params['id'];
  }

}
