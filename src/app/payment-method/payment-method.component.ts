import { Router } from '@angular/router';
import { PaymentMethodData } from './../services/paymentMethodData';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalConfirmComponent } from '../modals/globals/global-confirm/global-confirm.component';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  currentPaymentMethod: PaymentMethodData = {
    PaymentMethodName:''
  };
  message = '';

  constructor(private service: PaymentMethodService, private router:Router, private dialog: MatDialog) { }

  PaymentMethodsList: PaymentMethodData[] = [];

  ngOnInit(): void {

    this.service.getPaymentMethods().subscribe((data:PaymentMethodData[]) => {
      this.PaymentMethodsList = data;
    }
    );
  }

  deletePaymentMethod(id:any): void {
    const confirm = this.dialog.open(GlobalConfirmComponent, {
      disableClose:true,
    })
    confirm.afterClosed().subscribe(res => {
      if(res) {
        this.service.delete(id).subscribe(res => {
          this.getAllData();
          console.log(res)
        },
        error => {
          alert("Payment method associated with 1 or more payments. Add new payment method instead.");
          this.router.navigate(['/add-payment-method']);
          console.log(error);
        })
      }
    })
  }

  getAllData(){
  this.service.getPaymentMethods().subscribe((data:PaymentMethodData[]) => {
    this.PaymentMethodsList = data;
    }
    );
  }

}
