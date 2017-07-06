import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {CategoriesService} from "../categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private http: Http, private categoriesService: CategoriesService) { }


  baseUrl = 'http://localhost:3000';
  categories = [];
  name = '';
  toSend: any = {name: this.name};

  getAllCategories(){
    this.categoriesService.getCategories()
      .subscribe(
        (data) => {
          const categories = data;
          this.categories = categories;
          console.log(categories);
        },
        err => {alert("ERROR: GET localhost:3000/categories ")}
      );

  }

  addCategory(){
    this.toSend.name = this.name;
    this.categoriesService.addCategory(this.toSend)
      .subscribe(
        () => {
          this.getAllCategories();
        },
        err => alert(err)
      )
  }

  deleteCategory(catId: number){
    this.categoriesService.deleteCategory(catId).
    subscribe(
      () => {
        this.getAllCategories();
      },
      err => alert(err)
    )
  }

  ngOnInit() {
    this.getAllCategories();
  }

}
