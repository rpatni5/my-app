import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-canceltransaction',
  templateUrl: './canceltransaction.component.html',
  styleUrls: ['./canceltransaction.component.css']
})
export class CanceltransactionComponent  {  

  // public session_id: string = "";
  // constructor( private httpClient: HttpClient,  private activateRoute: ActivatedRoute, private _orderService: OrderService){
    

  // }

  // ngOnInit(): void {
  //   // this.activateRoute.queryParams.subscribe((params) => {
  //   //   this.session_id = params['session_id'];
  //   // });
  //   this.CancelSession();
  // }

  // CancelSession(){
  //   this._orderService.cancelOrderPayment().subscribe((response: string) => {
  //   });
  // }

}
