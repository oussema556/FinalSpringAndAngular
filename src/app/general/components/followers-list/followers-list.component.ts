import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../features/user/services/user.service";
import {map} from "rxjs/operators";
import {pipe} from "rxjs";
import {User} from "../../../shared/models/User";

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.scss']
})
export class FollowersListComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getFollowedUsers()
  }

  user: User = {
    userId: null,
    fullName: null,
    email: null,
    bio: null,
    profilePic: null,
    coverPic: null,
    address: null,
    created_at: null,
    posts: null,
    phone: null,
    favoriteCategories: null,
  }

  followers:any
  getFollowedUsers(){
    this.userService.userProfile(localStorage.getItem('id')).subscribe(
      res=>{
       /* for(const follower of res.followers){
         this.followers.push(this.userService.userProfile(res.followers[follower]))
        }
        console.log(this.followers)
        */
      }
    )

  }
    /*this.userService.getAllUsers()
      .pipe(map(res => {
       const users =[]

        for (const key in res) {
            users.push(res[key])
          }
          return users
        }
      )).subscribe(res=>{
        this.users=res
    },err=>{
        console.log(err)
    })
  }*/
}
