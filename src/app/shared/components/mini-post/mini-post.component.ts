import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.scss']
})
export class MiniPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Like
  likeStatus = false

  isLiked() {
    this.likeStatus = !this.likeStatus
    console.log(this.likeStatus)
  }

}
