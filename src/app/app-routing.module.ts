import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';

const routes: Routes = [

  {path:'' , component:ProductListComponent , pathMatch:'full' , canActivate:[authGuard]} ,
  {path:'login' , component:LoginComponent} ,
  {path:"products" , component:ProductListComponent,  canActivate:[authGuard]}, 
  {path:"products" , component:ProductListComponent,  canActivate:[authGuard]}, 


  {
    path:'products/:id' , component:ProductDetailsComponent , canActivateChild:[authGuard],
   children:[
    {path:'rating' , component:ProductRatingComponent ,canDeactivate:[authGuard]  },
    {path:"offers" , component:ProductOffersComponent}

   ]
  
  },

  {
    path:'service', 
    loadChildren:() => import('./auth/product/product.module').then(m=>m.ProductModule) ,
    canLoad:[authGuard]
  },

  {path:"**", component:ProductListComponent , pathMatch:'full' ,canActivate:[authGuard]}






];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
