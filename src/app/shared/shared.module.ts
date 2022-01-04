import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./components/post/post.component";
import { LikeComponent } from './components/reacts/like/like.component';
import { CommentComponent } from './components/reacts/comment/comment.component';
import { ReportComponent } from './components/reacts/report/report.component';
import { MiniPostComponent } from './components/mini-post/mini-post.component';
import {AppRoutingModule} from "../app-routing.module";
import { CreatePostComponent } from './components/create-post/create-post.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { MiniUserCardComponent } from './components/mini-user-card/mini-user-card.component';



@NgModule({
  declarations: [
    PostComponent,
    LikeComponent,
    CommentComponent,
    ReportComponent,
    MiniPostComponent,
    CreatePostComponent,
    LoadingSpinnerComponent,
    CommentFormComponent,
    CommentSectionComponent,
    MiniUserCardComponent,



  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    PostComponent,
    LikeComponent,
    MiniPostComponent,
    CreatePostComponent,
    LoadingSpinnerComponent,
    CommentComponent,
    MiniUserCardComponent
  ]
})
export class SharedModule { }
