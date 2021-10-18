import { Supplier } from 'src/app/services/supplier-interface';
import { PaymentMethodData } from './paymentMethodData';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  create(data: any): Observable<any> {
    return this.http.post(this.url + "PostPaymentMethod", data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.url + "PaymentMethods/" + id);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(this.url + "PaymentMethods/" + id, data);
  }

  get(id:any): Observable<PaymentMethodData> {
    return this.http.get(this.url + "PaymentMethods/" + id);
  }

}
