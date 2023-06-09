import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LabtestHomeComponent } from './components/labtest-home/labtest-home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine-home', component:MedicineHomeComponent},
  {path:'top-deals-by-category',component:TopDealsByCategoryComponent},
  {path:'view-product-details/:drugCode',component:ViewProductDetailsComponent},
  {path:'labtest-home', component:LabtestHomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
