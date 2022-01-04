import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
@Input() userPosts : any[] | null=[]

  constructor() { }

  ngOnInit(): void {
  console.log(this.userPosts+"££££")
  }

}
