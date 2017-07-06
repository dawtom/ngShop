import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { ProductsService } from '../products.service';
import {CategoriesService} from "../categories.service";
import {Router} from "@angular/router";
import {BagService} from "../bag.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {


  constructor(private http: Http, private router: Router,
              private productsService: ProductsService,
              private categoryService: CategoriesService,
              private bagService: BagService)
  {

  }
  products = [];
  categories = [];
  category = '';
  name = '';
  price;


  addToBag(prodId){
    this.bagService.addToBag(prodId);
  }

  toSend: any = {category: this.category, name: this.name, price: this.price};

  ngOnInit() {
    this.getAllProducts();
    this.categoryService.getCategories().
    subscribe(
      (data) => {
        const categories = data;
        this.categories = categories;
        console.log(categories);
      },
      err => {alert(err + "ERROR: GET localhost:3000/categories ")}
    );
  }



  getAllProducts(){
    this.productsService.getProducts()
      .subscribe(
        (data) => {
          const products = data;
          this.products = products;
          console.log(products);
        },
        err => {alert(err + "ERROR: GET localhost:3000/products ")}
      );
  }


  addProduct(){
    this.toSend.category = this.category;
    this.toSend.name = this.name;
    this.toSend.price = this.price;
    this.productsService.addProduct(this.toSend)
      .subscribe(
        () => {
          this.getAllProducts();
        },
        err => alert(err)
      )
  }

  deleteProduct(prodId: number){
    this.productsService.deleteProduct(prodId).
      subscribe(
      () => {
        this.getAllProducts();
      },
      err => alert(err)
    )
  }

}
