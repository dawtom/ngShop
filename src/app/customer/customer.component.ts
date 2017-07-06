import { Component, OnInit } from '@angular/core';
import {BagService} from "../bag.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private bagService: BagService) { }


  ngOnInit() {
  }

}
