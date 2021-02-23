import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Res } from './model';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  url = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient) {}

  postData(data: Res, username: string) {
    return this.http.post<any>(this.url + 'predict/' + username, data);
  }

  login(username, password) {
    return this.http.get<any>(
      this.url + 'user/login/' + username + '/' + password
    );
  }

  signup(data) {
    return this.http.post<any>(this.url + 'user/add', data);
  }

  getHistory(username) {
    return this.http.get<any>(this.url + 'history/' + username);
  }
}
