import { Supplier } from 'src/app/services/supplier-interface';
import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { MatDialog } from '@angular/material/dialog';
import { GlobalConfirmComponent } from '../modals/globals/global-confirm/global-confirm.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar:MatSnackBar, private service:SupplierService, private dialog: MatDialog) { }

  supplierList: Supplier[] = [];

  ngOnInit(): void {
    this.service.getPaymentMethods().subscribe((data:Supplier[]) => {
      this.supplierList = data;
    }
    );
  }

  deleteSupplier(id:any): void {
    const confirm = this.dialog.open(GlobalConfirmComponent, {
      disableClose:true,
    })
    confirm.afterClosed().subscribe(res => {
      if(res) {
        this.service.delete(id).subscribe(res => {
          this.getAllData();
          this.SavedSuccessful(2)
          console.log(res)
        })
      }
    })
  }

  getAllData(){
    this.service.getPaymentMethods().subscribe((data:Supplier[]) => {
      this.supplierList = data;
      }
      );
    }
    SavedSuccessful(isUpdate:number) {
      if (isUpdate == 2) {
        this._snackBar.open('Record Deleted Successfully!', 'Close', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    }
}
