import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Router } from './router';

import { App } from './main/app';
import { PostList } from './pages/post-list/main';
import { PostListItem } from './pages/post-list/post-list-item'
import { PostDetail } from './pages/post-detail/main';
import { AdDayListItem } from "./pages/post-detail/ad-day-list-item";

import { Service } from './service'

@NgModule({
  declarations: [
    PostList,
    PostListItem,
    PostDetail, 
    AdDayListItem,
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Router
  ],
  providers: [ Service ],
  bootstrap: [ App ]
})
export class AppModule { }
