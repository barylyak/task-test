import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  postId = 1;

  constructor() { }
  setId(id){
    this.postId = id;
  }

}

