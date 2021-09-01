import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-add-edit-payment-method',
  templateUrl: './add-edit-payment-method.component.html',
  styleUrls: ['./add-edit-payment-method.component.css']
})
export class AddEditPaymentMethodComponent implements OnInit {

    form: FormGroup | undefined;
    id: number | undefined;
    isAddMode: boolean | undefined;
    loading = false;
    submitted = false;


  constructor() { }

  ngOnInit(): void {
  }

}
