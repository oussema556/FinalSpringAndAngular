import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";



@Component({
  selector: 'app-change-profile-pic',
  templateUrl: './change-profile-pic.component.html',
  styleUrls: ['./change-profile-pic.component.scss']
})
export class ChangeProfilePicComponent implements OnInit {





  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  selectedFile!: File
  selectFile(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  uploadImageData = new FormData();
test(){
  console.log(this.selectedFile)
}
  changeProfilePic(){
    this.uploadImageData.append('file', this.selectedFile);
    console.log(this.uploadImageData)
    this.userService.changeProfilePic(this.uploadImageData)
  }


}
