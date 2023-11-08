import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-successtransaction',
  templateUrl: './successtransaction.component.html',
  styleUrls: ['./successtransaction.component.css'],
})
export class SuccesstransactionComponent implements OnInit {
  session_id: string = '';
  user_id: string = '';
  constructor(
    private activateRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params) => {
      this.session_id = params['session_id'];
      this.user_id = params['user_id'];
    });

    this.OrderSuccess();
  }

  public OrderSuccess() {
    this.httpClient
      .get(
        'https://localhost:7253/order/success?session_id=' +
          this.session_id +
          '&user_id=' +
          this.user_id
      )
      .subscribe((x:any) => {
        console.log('Data: ' + x.value);
      });
  }
}
