import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ProductServiceComponent } from "./product-service/product-service.component";



const rotes:Routes = [

    {path:"" ,  component:ProductServiceComponent}



]


@NgModule({
    imports:[RouterModule.forChild(rotes)],
    exports:[RouterModule]

})



export class ProductServiceRoutingModule{}