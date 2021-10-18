import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { Component, OnInit } from '@angular/core';
import { PaymentMethodData } from '../services/paymentMethodData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.css']
})
export class AddPaymentMethodComponent implements OnInit {
  paymentMethod: PaymentMethodData = {
    PaymentMethodName: '',
  };
  submitted = false;
  edit = false;

  constructor(private service: PaymentMethodService, private router: Router) { }

  ngOnInit(): void {
  }
  savePaymentMethod(): void {
    const data = {
      PaymentMethodName: this.paymentMethod.PaymentMethodName,
    };

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/payment-method']);
          alert('Payment method created');
        },
        error => {
          console.log(error);
        });
  }
  newPaymentMethod(): void {
    this.submitted = false;
    this.paymentMethod = {
      PaymentMethodName: ''
    };
  }

}
