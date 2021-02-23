import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PredictService } from '../predict.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private predictService: PredictService,
    private router: Router,
    private auth: AuthService
  ) {}
  public myForm;
  public wrongInput;

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl('form');
    }
    this.myForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.wrongInput = false;
  }

  get username() {
    return this.myForm.get('username');
  }

  get password() {
    return this.myForm.get('password');
  }

  login() {
    this.predictService
      .login(this.username.value, this.password.value)
      .subscribe((res) => {
        if (res['valid']) {
          localStorage.setItem('username', this.username.value);
          this.router.navigateByUrl('form');
        } else {
          this.wrongInput = true;
        }
      });
  }

  signup() {
    this.router.navigateByUrl('signup');
  }
}
