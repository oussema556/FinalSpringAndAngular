import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

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
