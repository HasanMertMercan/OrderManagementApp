import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'anasayfa', component: MainPageComponent },
      { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
      { path: '**', redirectTo: 'anasayfa', pathMatch: 'full' }
    ]),
    //ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
