import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductListComponent
  ],
  declarations: [
    ProductListComponent
  ]
})
export class ProductModule { }