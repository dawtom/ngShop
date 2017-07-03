import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptionsArgs, RequestMethod, RequestOptions} from "@angular/http";
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private http: Http) {

  }
  baseUrl = 'http://localhost:3000';
  products = [];
  public author = '';
  public title = '';


  toSend: any = {author: this.author, title: this.title};

  getAllProducts(){
    this.http.get
    (this.baseUrl + '/books').map((resp:Response) => resp.json())
      .subscribe(
        (data) => {
          const products = data;
          this.products = products;
          console.log(products);
        },
        err => {alert("ERROR: GET localhost:3000/books ")}
      );

  }

  ngOnInit() {
    this.getAllProducts();
  }
  addProduct(){
    this.toSend.author = this.author;
    this.toSend.title = this.title;
    this.http.post(this.baseUrl + '/books', this.toSend, new Headers())
      .subscribe(
        () => {
          location.reload();
        },
        err => alert(err)
      )
  }

  toDelete: any = {id: 0, author: this.author, title: this.title};
  prodId = 0;
  deleteProduct(prodId: number){
    this.http.delete(this.baseUrl + '/books/' + prodId).
      subscribe(
      () => {
        location.reload();
      },
      err => alert(err)
    )
  }

}
