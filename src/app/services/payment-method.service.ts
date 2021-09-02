import { PaymentMethodData } from './paymentMethodData';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(private http:HttpClient) { }

  url = "https://localhost:44373/api/"

  //get payment methods
  getPaymentMethods():Observable<PaymentMethodData[]>
  {
    return this.http.get<PaymentMethodData[]>(this.url + "GetPaymentMethods")
  }
}
