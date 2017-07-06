import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "./products/IProduct";
import {Response, Http, Headers} from "@angular/http";

@Injectable()

export class ProductsService {

  constructor(private http: Http) { }

  baseUrl = 'http://localhost:3000';

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.baseUrl + '/products')
      .map((response: Response) => <IProduct[]> response.json())
  }

  getSingleProduct(prodId): Observable<IProduct> {
    return this.http.get(this.baseUrl + '/products/' + prodId)
      .map((response: Response) => <IProduct> response.json())
  }

  addProduct(toSend): Observable<Response>{
    return this.http.post(this.baseUrl + '/products', toSend, new Headers());
  }

  deleteProduct(prodId: number){
    return this.http.delete(this.baseUrl + '/products/' + prodId);
  }

}
