import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  formIsGeneral= true;
  formIsSecurity= false
  constructor() { }

  ngOnInit(): void {
  }
  isFormSecurity(){
    if(this.formIsGeneral && !this.formIsSecurity){

      this.formIsGeneral= false
      this.formIsSecurity=true
    }
  }



  isFormGeneral(){
    if(!this.formIsGeneral && this.formIsSecurity){

        this.formIsGeneral= true
        this.formIsSecurity=false
      }
    }

}
