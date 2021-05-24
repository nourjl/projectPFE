import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  readonly root_url ;

  constructor(private http: HttpClient) {
    this.root_url = 'http://localhost:5000';
   }

  get(url: string){
    return this.http.get(`${this.root_url}/${url}`);
  }

  post(url: string, payload: Object){
    return this.http.post(`${this.root_url}/${url}`, payload);
  }

  patch(url: string, payload: Object){
    return this.http.patch(`${this.root_url}/${url}`, payload);
  }

  delete(url:string){
    return this.http.delete(`${this.root_url}/${url}`);
  }
}
