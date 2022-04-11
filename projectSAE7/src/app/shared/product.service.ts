import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  baseUrlProduct = "http://localhost:3000/products";
  setColor(){
    //traitement pour modifier une couleur
  }
  getAllProductsStatique():Product[]{ //méthode synchrone
    //consommer les web services
   return [];
}
  getAllProducts(): Observable<Product[]>{ //méthode asychrone
       //consommer les web services
      return this._http.get<Product[]>(this.baseUrlProduct);
  }
  getProductById(id:number): Observable<Product>{
    return this._http.get<Product>(this.baseUrlProduct+"/"+id);
  }
  AddProduct(p:Product): Observable<Product>{
    return this._http.post<Product>(this.baseUrlProduct,p);
  }
  deleteProduct(p:Product): Observable<Product>{
    return this._http.delete<Product>(this.baseUrlProduct+"/"+p.id);

  }
}
