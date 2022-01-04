import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../features/user/services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName= localStorage.getItem('fullName')
  profilePic= localStorage.getItem('profilePic')
  allPosts: any[]=[]
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
  }


  likeStatus = false
  isLoading= true;

  getAllPosts(){
    return this.userService.getAllPosts().subscribe(res=>{
      res.forEach(post =>{
        this.allPosts.push(post)
        this.isLoading=false
      })
      console.log(this.allPosts)

    },err=>{

      console.log(err)
    })
  }


  isLiked() {
    this.likeStatus = !this.likeStatus
    console.log(this.likeStatus)
  }
}
