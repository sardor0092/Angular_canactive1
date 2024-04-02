import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.scss']
})
export class ProductServiceComponent implements OnInit {



  constructor(){
    console.log("Service component");
    
  }

  ngOnInit(): void {
   
    console.log("Product Service component initialized");
    
  }

  



}
