import { Injectable } from "@angular/core";
import {  CanActivate, CanActivateChild, CanDeactivate, CanLoad,  UrlTree, Route, UrlSegment, Router } from "@angular/router";
import { ProductRatingComponent } from "../product-rating/product-rating.component";

import { AuthService } from "./auth.service";

@Injectable({
  providedIn:'root'

})


export class authGuard implements CanActivate ,CanActivateChild ,CanDeactivate<ProductRatingComponent> , CanLoad {
 
 
  constructor(private authService:AuthService ,  private router:Router) {}
 
  canActivate(): boolean  {

    return  this.checkAuth();

    
  
  }

  canActivateChild(): boolean  {

    return  this.checkAuth();
    
  
  }


  canDeactivate(component:ProductRatingComponent): boolean  {
    if(component.hasUnsavedChanges()){
      return window.confirm("edit");
    }
    return true;
  
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean  {

    return  this.checkAuth();

  
  }



  private checkAuth():boolean{

    if(this.authService.isAuthUser()) {
      return true;

    }
     else {

      this.router.navigate(['/login']);
      return false;

     }

  }



  
} 