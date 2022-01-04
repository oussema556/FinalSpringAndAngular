import { Injectable } from '@angular/core';
import {HttpClient, HTTP_INTERCEPTORS} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserSession} from "../../shared/models/UserSession";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private _router: Router) { }

  public login(email:String,password:String){
    return this.http.post<UserSession>(`${environment.apiUrl}/auth/signIn`,{
      email:email,
      password:password
    })
  }

  public registration(fullName:String,email:String,password:String){
    return this.http.post( `${environment.apiUrl}/register`,{
      fullName: fullName,
      email:email,
      password:password
    })
      .subscribe(response=>{
        this._router.navigate(["/confirmEmail"])
      },err =>{
        console.log(err.message)
      })
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.clear()
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
