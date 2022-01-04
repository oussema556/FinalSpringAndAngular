import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user/containers/user-profile/user-profile.component';
import { ProfilePostsComponent } from './user/components/profile-posts/profile-posts.component';
import {ChangeProfilePicComponent} from "./user/components/change-profile-pic/change-profile-pic.component";
import {ReactiveFormsModule} from "@angular/forms";
import { UserSettingsComponent } from './user/containers/user-settings/user-settings.component';
import { SecurityFormComponent } from './user/components/security-form/security-form.component';
import {GeneralInfoFormComponent} from "./user/components/general-info-form/general-info-form.component";
import {SharedModule} from "../shared/shared.module";
import { UserPostsComponent } from './post/containers/user-posts/user-posts.component';



@NgModule({
    declarations: [
        UserProfileComponent,
        ProfilePostsComponent,
        ChangeProfilePicComponent,
        UserSettingsComponent,
        SecurityFormComponent,
        GeneralInfoFormComponent,
        UserPostsComponent
    ],
    exports: [
        UserProfileComponent,
        UserPostsComponent,


    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FeaturesModule { }
