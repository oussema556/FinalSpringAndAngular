import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../../../shared/models/User";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient,
    private _routet: Router
  ) {
  }

  userProfile(id: any) {
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`)

  }


  updateGeneralInfo(fullName?:string,bio?:string,phone?:string,address?:string){
    this.http.put(`${environment.apiUrl}/user/updateUser/${localStorage.getItem('id')}`,{
      fullName:fullName,
      bio:bio,
      phone: phone,
      address: address
    }).subscribe(
      response=>{
        this._routet.navigate([`/profile/${localStorage.getItem('id')}`])
        console.log("done")
      },error=>{
        console.log(error)
      }
    )
  }

  updateUserProfile(id: string, fullName: string, email: string, bio: string, phone: string, adress: string) {
    this.http.put<any>(`${environment.apiUrl}/updateUser`, {
      id: id,
      fullName: fullName,
      email: email,
      bio: bio,
      phone: phone,
      adress: adress
    }).subscribe(res => {
      console.log("done")
    }, err => {
      console.log(err.message)
    })
  }

  changeProfilePic(file: File) {
    const formData: FormData = new FormData();

    formData.append('file', file);

    this.http.post(`${environment.apiUrl}/user/uploadProfilePic`,formData).subscribe(
      res=>{
        console.log('done')
      },err =>{
        console.log(err.message)
      })
  }

  getUserPosts(id:string | null){
    return this.http.get<any>(`${environment.apiUrl}/posts/${id}`)
      .pipe(map(res => {
          const posts =[]
          for (const key in res) {
            posts.push(res[key])
          }
          return posts
        }
      ))
  }

  changePassword(value: any) {

  }
}
