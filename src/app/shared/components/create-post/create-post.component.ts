import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../features/post/services/post.service";
import {Category} from "../../models/Category";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {



  categories: Category[]=[]

  post= new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
  });
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getCategories()
      .subscribe(res => {
         res.forEach(category =>{
           this.categories.push(category)
         })
      })
  }
  get title(){
    return this.post.get('title')
  }
  get description(){
    return this.post.get('description')
  }
get category(){
    return this.post.get('category')
}
  changeCategory(e:any){
    this.category?.setValue(e.target.value);
  }

  createPost() {

    const selectedCategory= this.categories.find((category: Category)  => category.categoryId === this.category?.value)
    console.log(selectedCategory)
    this.postService.createPost(
      this.title?.value,
      this.description?.value,
      selectedCategory,
    )
      .subscribe(res=>{
        console.log('done')
        console.log(res)
      },err =>{
        console.log(err)
      })
  }
}
