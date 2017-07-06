import { Injectable } from '@angular/core';

@Injectable()
export class BagService {

  constructor() { }


  bagIds: number[] = [];

  addToBag(prodId){
    this.bagIds.push(prodId);
    alert("Added");
  }
}
