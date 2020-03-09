import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {FormsModule} from "@angular/forms";
import { PostsComponent } from './posts/posts.component';
import {RouterModule} from "@angular/router";
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './comments/comments.component';
import {HttpService} from "./services/http.service";
import { AddNewComponent } from './add-new/add-new.component';

const routes = [
  {path: '', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'add-new', component: AddNewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    DetailsComponent,
    CommentsComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
