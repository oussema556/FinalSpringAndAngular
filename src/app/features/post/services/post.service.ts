import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Category} from "../../../shared/models/Category";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:HttpClient
  ) { }

  getCategories(){
    return this.http.get<any>(`${environment.apiUrl}/categories`)
      .pipe(map(res => {
          const categories =[]
          for (const key in res) {
            categories.push(res[key])
          }
          return categories
        }
      ))
  }

  createPost(title: string, description: string, category: Category | undefined){
    const post={
      title: title,
      content: description,
      categories: [category]
    }
    let formData: FormData = new FormData()
    formData.append('post',new Blob([JSON.stringify(post)],{type: "application/json"}))
    return this.http.post(`${environment.apiUrl}/post`,formData)
  }

  deletePost(postId: string) {
    return this.http.delete(`${environment.apiUrl}/post/${postId}`)
  }

  like(postId: string) {
    return this.http.post(`${environment.apiUrl}/post/like/${postId}`,"hh")
  }

  addComment(postId: string, content: any) {
    return this.http.post(`${environment.apiUrl}/post/${postId}`,
      {
      content: content,
            })
  }

  deleteComment(commentId: string) {
      return this.http.delete(`${environment.apiUrl}/post/comment/${commentId}`)
  }
}
