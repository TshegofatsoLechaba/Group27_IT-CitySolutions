
import { Supplier } from './../services/supplier-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { SupplierService } from '../services/supplier.service';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  allEmployees: Observable<Supplier[]> | undefined;
  supplierForm: any;
  id?: number;
  isAddMode!: boolean;
  form: any;
  formBuilder: any;
  supplier: Supplier | undefined;
  loading!: boolean;
  supplierIdUpdate:null | undefined;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  dataSaved = false;

  constructor(private _snackBar:MatSnackBar,private formbuilder: FormBuilder,private route:ActivatedRoute, private service:SupplierService, private router:Router) { }

  ngOnInit(): void {
    this.supplierForm = this.formbuilder.group({
      Supplier_Name: ['', [Validators.required]],
      Supplier_PhoneNumber: ['', Validators.minLength(11)],
      Supplier_EmailAddress: ['', [Validators.required]],
    });

    }

    createSupplier(supplier:Supplier){
      if (this.supplierIdUpdate == null) {
        supplier.Supplier_ID = this.id;

        this.service.create(supplier).subscribe(
          () => {
            this.dataSaved = true;
            this.SavedSuccessful(1);
            this.isAddMode = true;
            this.supplierIdUpdate = null;
            console.log(supplier);
            this.router.navigate(['/suppliers']);
          }
        );
      } else {
        supplier.Supplier_ID = this.supplierIdUpdate;

        this.service.update(supplier.Supplier_ID, supplier).subscribe(() => {
          this.dataSaved = true;
          this.SavedSuccessful(0);
          this.supplierIdUpdate = null;
          this.supplierForm.reset();
        });
      }
    }

    SavedSuccessful(isUpdate:number) {
      if (isUpdate == 0) {
        this._snackBar.open('Record Updated Successfully!', 'Close', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
      else if (isUpdate == 1) {
        this._snackBar.open('Record Saved Successfully!', 'Close', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
      else if (isUpdate == 2) {
        this._snackBar.open('Record Deleted Successfully!', 'Close', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    }

    onFormSubmit() {
      this.dataSaved = false;
      const supplier = this.supplierForm.value;
      this.createSupplier(supplier);
      this.supplierForm.reset();
    }

    cancel() {
      this.router.navigate(['/suppliers']);
    }
  }
