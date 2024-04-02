import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor( private autService:AuthService , private router:Router){
    


  }

  logout():void{
    this.autService.logout();
    this.router.navigate(['/login'])
    
  }

}
