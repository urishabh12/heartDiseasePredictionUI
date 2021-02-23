import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PredictService } from '../predict.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private predictService: PredictService,
    private router: Router,
    private auth: AuthService
  ) {}
  public myForm;
  public wrongInput;

  ngOnInit(): void {
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

  signup() {
    let data = {
      username: this.username.value,
      password: this.password.value,
    };
    this.predictService.signup(data).subscribe((res) => {
      if (res['res'] == 'ok') {
        this.router.navigateByUrl('login');
      } else {
        this.wrongInput = true;
      }
    });
  }
}
