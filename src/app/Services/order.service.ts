import { Injectable } from '@angular/core';
import { IOrderRequest } from './IOrderRequest';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
  export class OrderService {

    constructor(readonly http: HttpClient){}
    
    createOrder(order: IOrderRequest): Observable<string> {       
    return this.http.post<string>(`https://localhost:7253/payment/PlaceOrder`, order)    
   }
  //  cancelOrderPayment(): Observable<string> {       
  //   return this.http.get<any>(`https://localhost:7253/payment/cancelled`)    
  //  }

  getPaymentLink(order: IOrderRequest): Observable<string> {       
    return this.http.post<string>(`https://localhost:7253/payment/GetPaymentLink`, order)    
   }

}