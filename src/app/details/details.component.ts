import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
postId = 1;
 items = [];
  constructor( public http: HttpClient, public  postServise: HttpService) {
    this.postId = this.postServise.postId;
    console.log(this.postId)
    this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.postId).toPromise().then(data => {
      console.log(data);
      for(let key in data){
        console.log(data[key])
        if(data.hasOwnProperty(key)) {
          this.items.push(data[key])
        }
      }
    });
  }
  ngOnInit(): void {
  }
}
