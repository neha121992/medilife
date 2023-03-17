import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { LabtestHomeComponent } from './components/labtest-home/labtest-home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { TopDealHeaderComponent } from './components/top-deal-header/top-deal-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    LabtestHomeComponent,
    TopDealsByCategoryComponent,
    ViewProductDetailsComponent,
    TopDealHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
