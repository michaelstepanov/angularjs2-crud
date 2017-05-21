import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {Post} from '../shared/post';

@Component({
  selector: 'app-post-form',
  providers: [PostService],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() post: Post;
  @Input() users: any;

  loading: boolean = false;

  constructor(
      private postService: PostService,
      private router: Router,
      private location: Location
  ) {}

  ngOnInit() {}

  /**
   * Handles form submission
   *
   * @param form
   */
  onSubmit(form) {
    this.loading = true;
    this.postService.post(form).subscribe(res => {
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['posts']);
      }, 1000);
    });
  }

  /**
   * Goes to the previous page
   */
  goBack() {
    this.location.back();
  }

}
