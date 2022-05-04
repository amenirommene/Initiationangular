import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) {
    console.log ("je suis une nouvelle instance");
   }

  getAllProducts() : Product[] 
  {
    return [
      {id: 1, title: "T-shirt 1", price: 180, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0} ];
  }
  getAllProductsFromDB():Observable<Product[]>{
    return this._http.get<Product[]>("http://localhost:3000/products");
  }
  deleteProduct(p:Product):Observable<Product>{
    return this._http.delete<Product>("http://localhost:3000/products/"+p.id);

  }
  addProduct(p:Product):Observable<Product>{
    return this._http.post<Product>("http://localhost:3000/products",p);

  }
  updateProduct(p:Product):Observable<Product>{
    return this._http.put<Product>("http://localhost:3000/products/"+p.id,p);

  }
}
