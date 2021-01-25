import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Res } from './model';

@Injectable({
  providedIn: 'root',
})
export class PredictService {
  url = 'http://127.0.0.1:5000/predict';
  constructor(private http: HttpClient) {}

  postData(data: Res) {
    return this.http.post<any>(this.url, data);
  }
}
