import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
items = [];
  constructor(private http: HttpClient, public postServise: HttpService) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise().then(data => {
      console.log(data);
      for(let key in data)
        if(data.hasOwnProperty(key))
          this.items.push(data[key])

    });

  }
  ngOnInit(): void {
  }
  showPost(post){
    console.log(post);
    this.postServise.setId(post.id)
  }

}

