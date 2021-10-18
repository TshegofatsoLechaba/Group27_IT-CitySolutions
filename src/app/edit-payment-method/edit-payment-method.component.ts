import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaymentMethodData } from '../services/paymentMethodData';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-edit-payment-method',
  templateUrl: './edit-payment-method.component.html',
  styleUrls: ['./edit-payment-method.component.css']
})
export class EditPaymentMethodComponent implements OnInit {
  currentPaymentMethod: PaymentMethodData = {
    PaymentMethodName: '',
  };
  message = '';

  constructor(private service:PaymentMethodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPaymentMethod(this.route.snapshot.params['id']);
    console.log(this.currentPaymentMethod.PaymentMethod_ID);
  }

  getPaymentMethod(id: string): void {
    this.service.get(id)
      .subscribe(
        data => {
          this.currentPaymentMethod = data;
          console.log(data);
        },
        error => {
          alert(error);
        });
  }

  updatePaymentMethod(id:any): void {
    if(this.currentPaymentMethod.PaymentMethodName == ""){
      alert("Payment method cannot be empty")
    }
    else{
      this.service.update(id, this.currentPaymentMethod)
      .subscribe(
        response =>
        {
            alert('Payment method updated successfully!');
            this.router.navigate(['/payment-method']);
        },
        error => {
          console.log(error);
        })
      }
  }
}
