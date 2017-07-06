import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {HttpModule} from "@angular/http";
import {ImageUploadModule} from "angular2-image-upload";
import { RouterModule, Routes } from '@angular/router';

import { ProductsService } from './products.service';
import { CategoriesService} from './categories.service'
import { CategoriesComponent } from './categories/categories.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { BagComponent } from './bag/bag.component';
import {BagService} from "./bag.service";

const appRoutes: Routes = [
  {path: 'manager', component: ManagerComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'categories', component: CategoriesComponent}
    ]
  },
  {path: 'customer', component: CustomerComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'bag', component: BagComponent}
    ]
  },
  {path: 'navigator', component: NavigatorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    CustomerComponent,
    ManagerComponent,
    NavigatorComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ImageUploadModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ProductsService,
    CategoriesService,
    BagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
