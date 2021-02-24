import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PredictService } from '../predict.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private predictService: PredictService
  ) {}

  dataSource: any[];
  username: string;
  displayedColumns: string[];
  displayedColumnsTemp: string[];

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('login');
    }
    this.username = this.auth.getUsername();
    this.displayedColumns = [
      'age',
      'chol',
      'dateTime',
      'oldpeak',
      'thalach',
      'trestbps',
      'result',
    ];
    this.displayedColumnsTemp = [
      'age',
      'ca_0',
      'ca_1',
      'ca_2',
      'ca_3',
      'ca_4',
      'chol',
      'cp_0',
      'cp_1',
      'cp_2',
      'cp_3',
      'dateTime',
      'exang_0',
      'exang_1',
      'fbs_0',
      'fbs_1',
      'oldpeak',
      'restecg_0',
      'restecg_1',
      'restecg_2',
      'result',
      'sex_0',
      'sex_1',
      'slope_0',
      'slope_1',
      'slope_2',
      'thal_0',
      'thal_1',
      'thal_2',
      'thal_3',
      'thalach',
      'trestbps',
    ];
    this.predictService.getHistory(this.username).subscribe((res) => {
      this.dataSource = res;
    });
  }
}
