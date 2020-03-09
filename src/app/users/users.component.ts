import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

items = [];
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users').toPromise().then(data => {
      console.log(data);
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);

    });




    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(res => {
    //     this.arr = res;
    //     console.log(this.arr)
    //   })
    //   .catch(err => console.log(err))
    //

  }

  ngOnInit(): void {
  }



}
