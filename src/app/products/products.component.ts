import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptionsArgs, RequestMethod, RequestOptions} from "@angular/http";
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';
import {CategoriesComponent} from '../categories/categories.component'
import {Observable} from "rxjs";
import {IProduct} from "./IProduct";
import {CategoriesService} from "../categories.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {


  constructor(private http: Http, private productsService: ProductsService, private categoryService: CategoriesService) {

  }
  baseUrl = 'http://localhost:3000';
  products = [];
  categories = [];
  category = '';
  name = '';
  price;



  toSend: any = {category: this.category, name: this.name, price: this.price};




  getAllProducts(){
    this.productsService.getProducts()
      .subscribe(
        (data) => {
          const products = data;
          this.products = products;
          console.log(products);
        },
        err => {alert("ERROR: GET localhost:3000/products ")}
      );
  }

  ngOnInit() {
    this.getAllProducts();
    this.categoryService.getCategories().
    subscribe(
      (data) => {
        const categories = data;
        this.categories = categories;
        console.log(categories);
      },
      err => {alert("ERROR: GET localhost:3000/categories ")}
    );
  }
  addProduct(){
    this.toSend.category = this.category;
    this.toSend.name = this.name;
    this.toSend.price = this.price;
    this.productsService.addProduct(this.toSend)
      .subscribe(
        () => {
          location.reload();
        },
        err => alert(err)
      )
  }

  deleteProduct(prodId: number){
    this.productsService.deleteProduct(prodId).
      subscribe(
      () => {
        location.reload();
      },
      err => alert(err)
    )
  }

}
