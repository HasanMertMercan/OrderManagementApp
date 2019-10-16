import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';

@NgModule({
  imports: [
    CommonModule,
    MainPageComponent,
    RouterModule.forChild([
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent},
      // { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
      // { path: '**', redirectTo: 'anasayfa', pathMatch: 'full' }
    ]),
  ],
  declarations: [
  ProductListComponent,
  ProductDetailComponent
  ]
})
export class ProductModule { }
