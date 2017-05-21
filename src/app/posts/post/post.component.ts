import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/post.service';
import { UserService } from '../../users/shared/user.service';
import { Post } from 'app/posts/shared/post';

@Component({
  selector: 'app-post',
  providers: [PostService, UserService],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private post: Post = {
    id: null,
    userId: null,
    title: null,
    body: null
  };
  private users: any = []; // List of users

  constructor(
      private postService: PostService,
      private userService: UserService,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get ID of the post
    let id = this.route.snapshot.params.id;
    // If ID was passed
    if (id) {
      // By this.post.id we check what title to show (Edit Post or Create Post)
      this.post.id = id;
      // Get post data
      this.postService.get(id).subscribe(post => {
        this.post = post;
      });
    }
    // Get users for drop down list
    this.userService.all().subscribe(users => {
      this.users = users.data;
    });
  }

}
