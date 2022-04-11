import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myParam: string;
  constructor(private ac:ActivatedRoute) {}

  ngOnInit(): void { //méthode hook
    //this.myParam=this.ac.snapshot.params.id;
    this.ac.paramMap.subscribe(res=>this.myParam=res.get('id'));
  }

}
