import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { UsersComponent } from './users/users.component';

export const router: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'posts/create',
        component: PostComponent
    },
    {
        path: 'posts/:id',
        component: PostComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);