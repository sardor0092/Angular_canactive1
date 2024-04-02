import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm?:any;

  constructor(private fb:FormBuilder , private router:Router ,
     private authService:AuthService){

  }



  ngOnInit(): void {

    this.loginForm =  this.fb.group({
      username:['' , Validators.required],
      password:['' , Validators.required]

    });
  
  }

  onSubmit(){
    if(this.loginForm.valid){

      const username  = this.loginForm.get('username').value;
      const password  = this.loginForm.get('password').value;

      if(this.authService.login(username , password)) {
        this.router.navigate(['/product-list']);

      }

      else {
        console.error("Xatolik!");
        

      }

  }




  }





}
