import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch:"full"},
  {path:"products", component:ProductsComponent},
  {path:"product/:id", component:ProductComponent},
  {path: "test2", component:Test2Component},
  {path: "add", component:AddProductComponent},
  {path: "**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
