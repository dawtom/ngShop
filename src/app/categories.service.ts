import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ICategory} from "./categories/ICategory";

@Injectable()
export class CategoriesService {

  constructor(private http: Http) { }

  baseUrl = 'http://localhost:3000';

  getCategories(): Observable<ICategory[]> {
    return this.http.get(this.baseUrl + '/categories')
      .map((response: Response) => <ICategory[]> response.json())
  }

}
