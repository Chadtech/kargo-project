import { Component, Input } from '@angular/core';

import { Post } from '../../Types/post';

@Component({
  selector: "post-list-item-component",
  templateUrl: "./views/post-list-item.html",
  styleUrls: [ "./styles/post-list-item.css" ]
})
export class PostListItem {
  @Input() 
  post: Post;
}