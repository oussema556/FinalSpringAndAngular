import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../../../features/post/services/post.service";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    console.log(this.liked)
  }
//Like
  @Input() postId :string=""
  @Input() liked? : boolean

  likeStatus=false
  isLiked() {
    //this.liked = !this.liked
    console.log(this.liked)
  }


  like(){
    this.isLiked()
    this.postService.like(this.postId).subscribe(res=>{
      console.log("done")
    },err=>{
      console.log(err)
    })
  }


}
