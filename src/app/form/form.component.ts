import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PredictService } from '../predict.service';
import { Res } from '../model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  attempted: boolean;
  res: Res;
  s: number[];
  cpp: number[];
  fbss: number[];
  rstecg: number[];
  exangg: number[];
  slopee: number[];
  caa: number[];
  thall: number[];
  show1: boolean;
  show2: boolean;

  constructor(
    private fb: FormBuilder,
    private _predictService: PredictService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      age: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      cp: [null, [Validators.required]],
      trestbps: [null, [Validators.required]],
      chol: [null, [Validators.required]],
      fbs: [null, [Validators.required]],
      restecg: [null, [Validators.required]],
      thalach: [null, [Validators.required]],
      exang: [null, [Validators.required]],
      oldpeak: [null, [Validators.required]],
      slope: [null, [Validators.required]],
      ca: [null, [Validators.required]],
      thal: [null, [Validators.required]],
    });
    this.show1 = false;
    this.show2 = false;
    this.s = [0, 0];
    this.cpp = [0, 0, 0, 0];
    this.fbss = [0, 0];
    this.rstecg = [0, 0, 0];
    this.exangg = [0, 0];
    this.slopee = [0, 0, 0];
    this.caa = [0, 0, 0, 0, 0];
    this.thall = [0, 0, 0, 0];
    this.res = {
      age: null,
      trestbps: null,
      chol: null,
      thalach: null,
      oldpeak: null,
      sex_0: null,
      sex_1: null,
      cp_0: null,
      cp_1: null,
      cp_2: null,
      cp_3: null,
      fbs_0: null,
      fbs_1: null,
      restecg_0: null,
      restecg_1: null,
      restecg_2: null,
      exang_0: null,
      exang_1: null,
      slope_0: null,
      slope_1: null,
      slope_2: null,
      ca_0: null,
      ca_1: null,
      ca_2: null,
      ca_3: null,
      ca_4: null,
      thal_0: null,
      thal_1: null,
      thal_2: null,
      thal_3: null,
    };
    this.attempted = false;
  }

  get age() {
    return this.myForm.get('age');
  }

  get sex() {
    return this.myForm.get('sex');
  }

  get cp() {
    return this.myForm.get('cp');
  }

  get trestbps() {
    return this.myForm.get('trestbps');
  }

  get chol() {
    return this.myForm.get('chol');
  }

  get fbs() {
    return this.myForm.get('fbs');
  }

  get restecg() {
    return this.myForm.get('restecg');
  }

  get thalach() {
    return this.myForm.get('thalach');
  }

  get exang() {
    return this.myForm.get('exang');
  }

  get oldpeak() {
    return this.myForm.get('oldpeak');
  }

  get slope() {
    return this.myForm.get('slope');
  }

  get ca() {
    return this.myForm.get('ca');
  }

  get thal() {
    return this.myForm.get('thal');
  }

  submit() {
    this.s[+this.sex.value] = 1;
    this.cpp[+this.cp.value] = 1;
    this.fbss[+this.fbs.value] = 1;
    this.caa[+this.ca.value] = 1;
    this.rstecg[+this.restecg.value] = 1;
    this.slopee[+this.slope.value] = 1;
    this.thall[+this.thal.value] = 1;

    this.res.age = +this.age.value;
    this.res.trestbps = +this.trestbps.value;
    this.res.chol = +this.chol.value;
    this.res.thalach = +this.thalach.value;
    this.res.oldpeak = +this.oldpeak.value;
    this.res.sex_0 = this.s[0];
    this.res.sex_1 = this.s[1];
    this.res.cp_0 = this.cpp[0];
    this.res.cp_1 = this.cpp[1];
    this.res.cp_2 = this.cpp[2];
    this.res.cp_3 = this.cpp[3];
    this.res.fbs_0 = this.fbss[0];
    this.res.fbs_1 = this.fbss[1];
    this.res.restecg_0 = this.rstecg[0];
    this.res.restecg_1 = this.rstecg[1];
    this.res.restecg_2 = this.rstecg[2];
    this.res.exang_0 = this.exangg[0];
    this.res.exang_1 = this.exangg[1];
    this.res.slope_0 = this.slopee[0];
    this.res.slope_1 = this.slopee[1];
    this.res.slope_2 = this.slopee[2];
    this.res.ca_0 = this.caa[0];
    this.res.ca_1 = this.caa[1];
    this.res.ca_2 = this.caa[2];
    this.res.ca_3 = this.caa[3];
    this.res.ca_4 = this.caa[4];
    this.res.thal_0 = this.thall[0];
    this.res.thal_1 = this.thall[1];
    this.res.thal_2 = this.thall[2];
    this.res.thal_3 = this.thall[3];

    this._predictService.postData(this.res).subscribe((data) => {
      if (data.result == 0) {
        this.show1 = true;
        this.show2 = false;
      } else {
        this.show2 = true;
        this.show1 = false;
      }
    });
  }
}
