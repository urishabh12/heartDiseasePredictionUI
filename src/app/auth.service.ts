import { Injectable } from '@angular/core';
import { PredictService } from './predict.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private predictService: PredictService) {}

  isAuthenticated(): boolean {
    let value = localStorage.getItem('username');

    if (value) {
      return true;
    }

    return false;
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }
}
