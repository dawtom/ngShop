import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-image-test',
  templateUrl: './image-test.component.html',
  styleUrls: ['./image-test.component.css']
})
export class ImageTestComponent implements OnInit {

  constructor(private pSer: ProductsService) {

  }

  ngOnInit() {
  }

}
