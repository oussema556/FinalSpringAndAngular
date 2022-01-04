import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {PostService} from "../../../features/post/services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  dropdownIsToggled= false
  @Input() post: any
  canDelete=false
  showComments=false

  showCommentsFn(){
    this.showComments=!this.showComments
  }
  constructor(
    private postService: PostService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    if(this.post.user.userId==localStorage.getItem('id'))
      this.canDelete=true
  }



  toggleDropdown() {
    this.dropdownIsToggled= !this.dropdownIsToggled
  }

  liked=false
    isLiked(){
      for(const like in this.post.likes){
        if(this.post.likes[like].userId==localStorage.getItem('id'))
        {
          this.liked=true
          return
        }
        return
      }
    }


  deletePost() {
    this.postService.deletePost(this.post.postId).subscribe(
      res=>{
        this._router.navigate(['/home'])
        console.log('done')
      },
      err =>{
        console.log('err')
    }
    )
  }
}

