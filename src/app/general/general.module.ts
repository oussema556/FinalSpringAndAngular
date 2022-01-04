import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { HomeComponent } from './containers/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import {PostComponent} from "../shared/components/post/post.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ConfirmEmailComponent } from './containers/confirm-email/confirm-email.component';
import {NgPasswordValidatorModule, NgPasswordValidatorOptions} from "ng-password-validator";
import {FeaturesModule} from "../features/features.module";
import { FollowersListComponent } from './components/followers-list/followers-list.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PostListComponent,
    ConfirmEmailComponent,
    FollowersListComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FeaturesModule,
    ],
  exports:[
  ]
})
export class GeneralModule {

}
