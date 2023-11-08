import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { order } from '../order';
import { OrderService } from '../Services/order.service';
import { IOrderRequest } from '../Services/IOrderRequest';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  userid = 'myuid';
  paymentLink: string = '';
  private stripePromise?: Promise<Stripe | null>;
  stripe =
    'pk_test_51O8SjBLWKuD5pPy8lMDXRLavzvqciCQIHEAK6AqfKIOd0AkFYehcudPxdl34AXXeuRE5Dp0bIDblmrfdLX2mMzKP00MMUluyy5';

  public paymentForm: FormGroup = new FormGroup({
    CustomerID: new FormControl(null),
    CustomerEmail: new FormControl(null),
    OrderID: new FormControl(null),
    AmountID: new FormControl(null),
  });
  constructor(
    private httpClient: HttpClient,
    private _orderService: OrderService
  ) {}

  private _options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  async onPay() {
    // load Pub Key and call pay method
    await this.pay(this.stripe);
  }

  async pay(stripePublicKey: string) {
    let order: IOrderRequest = {
      OrderId: this.paymentForm.value.OrderID,
      UserId: this.paymentForm.value.CustomerID,
      CustomerEmail: this.paymentForm.value.CustomerEmail,
      Amount: this.paymentForm.value.AmountID,
    };

    this.stripePromise = loadStripe(stripePublicKey);
    const stripe = await this.stripePromise;
    this._orderService.createOrder(order).subscribe((response: string) => {
      stripe?.redirectToCheckout({ sessionId: response });
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // unsubscribe you stuff subscriptions
  }

  getPaymentLink() {
    let order: IOrderRequest = {
      OrderId: this.paymentForm.value.OrderID,
      UserId: this.paymentForm.value.CustomerID,
      CustomerEmail: this.paymentForm.value.CustomerEmail,
      Amount: this.paymentForm.value.AmountID,
    };

    this._orderService.getPaymentLink(order).subscribe((response: string) => {
      this.paymentLink = response;
    });
  }
}
