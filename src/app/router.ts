import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostList } from './pages/post-list/main';
import { PostDetail } from './pages/post-detail/main';


const routes: Routes = [
  { path: '',    component: PostList },
  { path: ':id', component: PostDetail }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class Router {}

