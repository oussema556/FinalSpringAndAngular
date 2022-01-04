import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../../../shared/models/User";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  id = localStorage.getItem('id')
  //img = "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
  userId:string | null=""
  posts: any[] = [];

  constructor(
    private userService: UserService,
    private renderer: Renderer2,
    private route:ActivatedRoute
    ) {

  }


  ngOnInit(): void {
    this.getUserProfile()
    this.getUserPosts()
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
  currentUser= localStorage.getItem('id');
  isLoading= false;

  getUserProfile() {
    this.isLoading=true
    this.route.paramMap.subscribe(params=>{
      this.userId = params.get('id')
      return this.userService.userProfile(params.get('id'))
        .subscribe(res => {
          this.user.userId = res.userId
          this.user.fullName = res.fullName
          this.user.email = res.email
          this.user.bio = res.bio
          this.user.profilePic = res.profilePic
          this.user.coverPic = res.coverPic
          this.user.address = res.address
          this.user.created_at = res.created_at
          this.user.phone = res.phone
          this.user.posts = res.posts
          this.user.favoriteCategories = res.favoriteCategories
          console.log(res)
          if (typeof this.user.profilePic === "string") {
            localStorage.setItem('profilePic', this.user.profilePic)
          }
          this.isLoading=false
        })
    })

  }

  updateProfileInfo() {
    console.log("done")
    this.user.bio="hassen ena rani"
    console.log(this.user)
     //this.userService.updateGeneralInfo(this.user)
  }

  getUserPosts(){
    this.route.paramMap.subscribe(params=>{
      return this.userService.getUserPosts(this.userId).subscribe(res=>{
        res.forEach(post =>{
          this.posts.push(post)
        })
        console.log(this.posts)

      },err=>{

        console.log(err)
      })
    })
  }


}
