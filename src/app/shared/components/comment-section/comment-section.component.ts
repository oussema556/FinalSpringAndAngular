import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../../features/post/services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  @Input() userFullName!: string
  @Input() commentContent!: string
  @Input() userId!: string
  @Input() commentId!: string

  isTheCommentOwner= this.userId==localStorage.getItem('id')
  constructor(
    private postService:PostService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  deleteComment() {
    this.postService.deleteComment(this.commentId).subscribe(
      res=>{
        console.log("done")
        this._router.navigate(['/home'])
      },err =>{
        console.log(err)
      }
    )
  }
}
