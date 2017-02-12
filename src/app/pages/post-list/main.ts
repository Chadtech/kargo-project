import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../Types/post';
import { Service } from '../../service'; 

@Component({
  templateUrl: "./views/main.html",
  styleUrls: [ "./styles/main.css" ]
})
export class PostList {
  posts: Post[] = [];
  errorMessage: string;

  constructor(
    private service: Service,
    private router: Router) { }

  getPosts(): void {
    this.service.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error =>  this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
