import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CanceltransactionComponent } from './canceltransaction/canceltransaction.component';
import { SuccesstransactionComponent } from './successtransaction/successtransaction.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderService } from './Services/order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'success-transaction',
    component: SuccesstransactionComponent,
  },
  { path: 'cancel-transaction', component: CanceltransactionComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CanceltransactionComponent,
    SuccesstransactionComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,RouterModule.forRoot(routes)],
  providers: [HttpClient, OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
