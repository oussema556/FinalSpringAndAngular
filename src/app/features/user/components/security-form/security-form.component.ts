import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

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

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  changePassword(){
    this.userService.changePassword(this.form.get('newPassword')?.value)
  }

}
