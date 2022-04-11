import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project sae8';
  prop1 = "first value";
  
  setTexte(){
    let t = "variable locale";
    console.log(t);
    this.title = "sae8";
  }
  setInputValue(val:any){
    this.prop1=val
  }
}
