import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectSAE7';
  classe= '4SE7';
  tab = ['angular', 'react', 'vuejs'];
  first(){
    alert ("bonjour");
  }
}
