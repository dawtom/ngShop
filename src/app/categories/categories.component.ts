import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private http: Http) { }


  baseUrl = 'http://localhost:3000';
  categories = [];

  getAllProducts(){
    this.http.get
    (this.baseUrl + '/categories').map((resp:Response) => resp.json())
      .subscribe(
        (data) => {
          const categories = data;
          this.categories = categories;
          console.log(categories);
        },
        err => {alert("ERROR: GET localhost:3000/categories ")}
      );

  }

  ngOnInit() {
    this.getAllProducts();
  }

}
