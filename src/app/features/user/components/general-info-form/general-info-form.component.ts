import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-general-info-form',
  templateUrl: './general-info-form.component.html',
  styleUrls: ['./general-info-form.component.scss']
})
export class GeneralInfoFormComponent implements OnInit {

  id= localStorage.getItem('id')
  form = new FormGroup({
    fullName: new FormControl(''),
    bio: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl('')
  })


  constructor(private userService:UserService) { }
  updateGeneralInfo(){
    this.userService.updateGeneralInfo(
      this.form.get('fullName')?.value,
      this.form.get('bio')?.value,
      this.form.get('phoneNumber')?.value,
      this.form.get('address')?.value,
    )
    localStorage.setItem('fullName',this.form.get('fullName')?.value)

  }


  ngOnInit(): void {
  }

}
