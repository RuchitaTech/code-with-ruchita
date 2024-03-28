import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'secure/customers', component:CustomerListComponent},
  {path:'secure/product/details/:id', component:ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
