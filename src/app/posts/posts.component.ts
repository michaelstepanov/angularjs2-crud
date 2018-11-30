import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from './shared/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  public currentPage;
  public limit;
  public totalCount;
  public posts: Post[];

  constructor(
      private postsService: PostService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      // Set defaults if no query param provided
      this.currentPage = +queryParams['page'] || 1;
      this.limit = +queryParams['limit'] || 3;
      const params = {
        page: this.currentPage,
        limit: this.limit
      };
      // Get posts
      this.all(params);
    });
  }

  /**
   * Get posts
   *
   * @param params
   */
  all(params) {
    this.postsService.all(params).subscribe(posts => {
      this.totalCount = posts.total;
      this.posts = posts.data;
    });
  }

  /**
   * On page change
   *
   * @param page
   */
  onPageChange(page) {
    this.router.navigate(['posts'], { queryParams: { page: page } });
  }

}
