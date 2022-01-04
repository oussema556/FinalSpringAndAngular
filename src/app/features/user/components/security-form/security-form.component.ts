import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-security-form',
  templateUrl: './security-form.component.html',
  styleUrls: ['./security-form.component.scss']
})
export class SecurityFormComponent implements OnInit {

  form = new FormGroup({
    newPassword: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
  })
  wrongPass=false
  constructor(private userService:UserService,private _route:Router) { }

  ngOnInit(): void {
  }

  changePassword(){
        if(this.form.get('newPassword')?.value===this.form.get('confirmPassword')?.value)
          this.userService.changePassword(this.form.get('newPassword')?.value)
            .subscribe(
              res=>{
                console.log("done")
                localStorage.clear()
                this._route.navigate(['/login'])
              }, err=>{console.log(err)})
        else
          this.wrongPass=true
  }

}
