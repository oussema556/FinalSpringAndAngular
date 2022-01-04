import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../features/post/services/post.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {


  commentForm= new FormGroup({
    content: new FormControl('',Validators.required)
  })

  @Input() postId!:string

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

  addComment(){
    this.postService.addComment(this.postId,this.commentForm.get('content')?.value).subscribe(res=>{
      console.log("done")
    },err=>{
      console.log(err)
    })
  }

}
