import {Component, OnInit} from '@angular/core';
import {BagService} from "../bag.service";
import { ProductsComponent } from "../products/products.component";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  constructor(private bagService: BagService,
              private productsService: ProductsService) {
  }

  bagIds: number[] = [];
  allProducts = [];
  productsFromBag = [];

  /*getAllProducts(){
    this.productsService.getProducts()
      .subscribe(
        (data) => {
          const products = data;
          this.allProducts = products;
        },
        err => {alert("ERROR: GET localhost:3000/products ")}
      );
  }*/

  ngOnInit() {
    this.bagIds = this.bagService.bagIds;

    for (let tmpId of this.bagIds) {
      this.productsService.getSingleProduct(tmpId)
        .subscribe(
          (data) => {
            const products = data;
            this.productsFromBag.push(data)
          },
          err => {alert("ERROR: GET localhost:3000/products/" + tmpId + ' Cannot get such product')}
        );
    }
    /*this.getAllProducts();
    this.productsFromBag = this.allProducts.filter(
      product => product.id in this.bagIds
    );*/
  }

  buy(): void{
    alert('Great again! You have just bought in our shop. This shop is special: you do not need to pay' +
      ' for anything because we will not deliver it anyway. Have a nice day!'  );
    this.bagService.bagIds = [];
    this.productsFromBag = [];
  }


}
