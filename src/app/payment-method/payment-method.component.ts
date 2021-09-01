import { PaymentMethodData } from './../services/paymentMethodData';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  constructor(public api: PaymentMethodService) { }

  PaymentMethodsList: PaymentMethodData[] = [];

  ngOnInit(): void {

    this.api.getPaymentMethods().subscribe((data:PaymentMethodData[]) => {
      this.PaymentMethodsList = data;
      console.log(this.PaymentMethodsList);
    }
    );
  }

}
