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



@NgModule({
  declarations: [
     PostComponent,
     LikeComponent,
     CommentComponent,
     ReportComponent,
     MiniPostComponent,
     CreatePostComponent,
     LoadingSpinnerComponent,

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
        LoadingSpinnerComponent
    ]
})
export class SharedModule { }
