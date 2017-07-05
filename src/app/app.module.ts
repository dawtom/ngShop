import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {ProductsComponent} from './products/products.component';
import {HttpModule} from "@angular/http";
import { ImageTestComponent } from './image-test/image-test.component';
import {ImageUploadModule} from "angular2-image-upload";
import { RouterModule, Routes } from '@angular/router';

import { ProductsService } from './products.service';
import { CategoriesService} from './categories.service'
import { CategoriesComponent } from './categories/categories.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { NavigatorComponent } from './navigator/navigator.component';

const appRoutes: Routes = [
  {path: 'manager', component: ManagerComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'categories', component: CategoriesComponent}
    ]
  },
  {path: 'customer', component: CustomerComponent},
  {path: 'navigator', component: NavigatorComponent}
  /*{path: 'products', component: ProductsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories', component: CategoriesComponent,
    children: [
      {path: 'withImage', component: ImageTestComponent}
    ]
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    ImageTestComponent,
    CategoriesComponent,
    CustomerComponent,
    ManagerComponent,
    NavigatorComponent
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
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
