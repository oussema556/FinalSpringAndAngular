import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/Auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserSession} from "../../../shared/models/UserSession";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  wrongData=false
  isLoading= false

  form= new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
    ])
})

  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }

  constructor(private authService:AuthService,private _router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
      this._router.navigate(['/home']);
  }

  login() {
    this.isLoading=true
    this.authService.login(this.email?.value,this.password?.value)
      .subscribe(response =>{
        const user = new UserSession(
          response.token,
          response.id,
          response.email,
          response.roles,
          response.fullName
        )
        localStorage.setItem('token',user.token)
        localStorage.setItem('email',user.email)
        for (let i=0;i<user.roles.length;i++)
          localStorage.setItem(`roles ${i}`,user.roles[i])
        localStorage.setItem('fullName',user.fullName)
        localStorage.setItem('id',user.id)
        this._router.navigate(["./home"])
        this.isLoading=false

    },err=>{
        this.isLoading=false
        this.wrongData=true
      })
  }

}
