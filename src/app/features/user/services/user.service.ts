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


  message: string="";
  imageName: any;


  getProfilePic(id: string | null){
    //Make a call to the Spring Boot Application to save the image
    return this.http.get(`${environment.apiUrl}/user/getProfilePic/${id}`,{ responseType: 'arraybuffer' })
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

  changeProfilePic(file: FormData) {
    this.http.post(`${environment.apiUrl}/user/uploadProfilePic`,{ observe: 'response' }).subscribe(
      res=>{
        this._routet.navigate([`/profile/${localStorage.getItem('id')}`])
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

  changePassword(password: string) {
      return this.http.put(`${environment.apiUrl}/user/changePassword`,password)
  }

  getAllPosts() {
    return this.http.get<any>(`${environment.apiUrl}/posts`)
      .pipe(map(res => {
          const posts =[]
          for (const key in res) {
            posts.push(res[key])
          }
          return posts
        }
      ))
  }

  getAllUsers() {
    return this.http.get<any>(`${environment.apiUrl}/users`)
  }
}
