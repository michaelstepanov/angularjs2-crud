import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsComponent } from './posts/posts.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PostComponent } from './posts/post/post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { UsersComponent } from './users/users.component';
import { PostsListItemComponent } from './posts/posts-list-item/posts-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsComponent,
    HomeComponent,
    PaginationComponent,
    PostComponent,
    PostFormComponent,
    UsersComponent,
    PostsListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
