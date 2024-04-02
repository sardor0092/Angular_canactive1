import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;
  private authSecretKey = 'Bearer token';

  constructor() {


    this.isAuth = !!localStorage.getItem(this.authSecretKey)

   }



   login(username:string , password:string):boolean {
    if(username === 'admin123' && password==="admin123") {
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        localStorage.setItem(this.authSecretKey , authToken);
        this.isAuth = true;
        return true;
    }

    else {

      return false;
    }

   }


   isAuthUser():boolean {
    return this.isAuth;
   }


   logout():void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuth =  false;
   }



}
