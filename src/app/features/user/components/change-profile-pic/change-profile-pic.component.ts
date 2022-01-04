import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-change-profile-pic',
  templateUrl: './change-profile-pic.component.html',
  styleUrls: ['./change-profile-pic.component.scss']
})
export class ChangeProfilePicComponent implements OnInit {

  @Output() jumbotronIsClosed: EventEmitter<boolean> = new EventEmitter()
  f= new FormGroup({
    picture: new FormControl('',Validators.required)
  })



  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  selectedFiles!: FileList
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  changeProfilePic(){
    console.log(this.f.get('picture'))
    const currentFile= this.selectedFiles.item(0) as File
    console.log(currentFile)
    this.userService.changeProfilePic(currentFile)
  }


}
