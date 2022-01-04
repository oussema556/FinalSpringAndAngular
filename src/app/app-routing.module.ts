import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./general/containers/login/login.component";
import {RegisterComponent} from "./general/containers/register/register.component";
import {HomeComponent} from "./general/containers/home/home.component";
import {UserProfileComponent} from "./features/user/containers/user-profile/user-profile.component";
import {ConfirmEmailComponent} from "./general/containers/confirm-email/confirm-email.component";
import {AuthGuard} from "./core/guards/auth/auth.guard";
import {UserSettingsComponent} from "./features/user/containers/user-settings/user-settings.component";
import {ChangeProfilePicComponent} from "./features/user/components/change-profile-pic/change-profile-pic.component";


let ProfileComponent;
const routes: Routes = [
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"register",
    component: RegisterComponent,
  },
  {
    path:"profile/:id",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changeProfilePic',
    component:ChangeProfilePicComponent
  },
  {
    path:"settings",
    component: UserSettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"",
    redirectTo: "home",
    pathMatch:'full'
  },
  {
    path:"confirmEmail",
    component: ConfirmEmailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
