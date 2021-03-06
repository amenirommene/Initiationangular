import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MonFilsProductComponent } from './mon-fils-product/mon-fils-product.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    NotFoundComponent,
    MonFilsProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // directive: ngModel
    HttpClientModule // service : HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
