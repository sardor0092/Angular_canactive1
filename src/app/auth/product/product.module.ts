import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ProductServiceComponent } from '../product-service/product-service.component';
import { ProductServiceRoutingModule } from '../product.routing.module';



@NgModule({
  declarations: [
    ProductServiceComponent


  ],
  imports: [
    CommonModule,
    ProductServiceRoutingModule
  ]
})
export class ProductModule { }
