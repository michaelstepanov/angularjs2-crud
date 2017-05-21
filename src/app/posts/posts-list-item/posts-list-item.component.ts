import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.css']
})
export class PostsListItemComponent implements OnInit {
  @Input() post;

  deleted: boolean = false;

  constructor(
      private postService: PostService
  ) {}

  ngOnInit() {}

  /**
   * The function handles on delete click
   *
   * @param id
   * @param event
   */
  onDelete(id, event) {
    event.preventDefault();
    this.postService.delete(id).subscribe(res => {
      this.deleted = true;
    });
  }

}
