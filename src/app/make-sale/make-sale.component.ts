import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaleService } from '../services/sale.service';
import { ProductSizeData, ProductCategoryData, CartItemData } from '../services/SaleData';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-make-sale',
  templateUrl: './make-sale.component.html',
  styleUrls: ['./make-sale.component.css']
})
export class MakeSaleComponent implements OnInit {


  constructor(
    public dialog: MatDialog, public api: SaleService
  ) { }

  //the below arrays are used to retrieve from the api
  CategoryList: ProductCategoryData[] = [];
  ItemList: ProductSizeData[] = [];
  CartItems: CartItemData[] = []


  rowHeight: any; //row height is to adjust the size of blocks for Category and items when adding more, so that it doesn't overlap down the screen

  count = this.CategoryList.length;

  //the below are used to calculate totals
  VAT = 15;
  TotalVAT = 0;
  SubTotal = 0;
  BalanceDue = 0;
  Discount = 0;

  ngOnInit(): void {

    this.api.getCategories().subscribe((data: ProductCategoryData[]) => {
      this.CategoryList = data
    }

    );

    //this retrieves and populates the Table with the items
    this.api.getCartItems().subscribe(data => {
      this.CartItems = data;
      this.CalculateTotals(); //calculate totals is a method called everytime the Cart updates, in order to recalculate the price
    })

    let count = this.CategoryList.length

    //counter is used to determine how to adjust rowHeight based on the CategoryList, one can be re-created for itemList
    switch (true) {
      case (count <= 4):
        this.rowHeight = "2:1";
        break;
      case (count > 4 && count < 7):
        this.rowHeight = "4:1.5";
        break;
      case (count >= 7):
        this.rowHeight = "4:1";
        break
    }
  }


  //not functional at the moment
  EnterBarcode() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(BarcodeDialog, dialogConfig);
  }

  CalculateTotals() {
    this.TotalVAT = 0;
    this.SubTotal = 0;
    this.BalanceDue = 0;
    this.Discount = 0;

    if (this.CartItems.length > 0) {

      this.CartItems.forEach(zz => {
        this.SubTotal += zz._Product_Size?.Price * zz.Quantity;
        this.TotalVAT += zz._Product_Size?.Price * (this.VAT / 100)
      })

      this.BalanceDue = this.SubTotal + this.TotalVAT - this.Discount;
    }
    else {
      this.TotalVAT = 0;
      this.SubTotal = 0;
      this.BalanceDue = 0;
      this.Discount = 0;
    }
  }


  //assigns the different colors per new Category
  getButtonColor(index: number) {
    let colours: string[] = this.Colors
    return colours[index]
  }

  AddCategory() {
    alert("hello friend")
  }

  AddItem() {

  }

  //when selecting a category this code helps change the view to items
  CategorySelected = false;
  SelectCategory(CategoryID: any) {
    this.api.getItems(CategoryID).subscribe((data: ProductSizeData[]) => {
      this.ItemList = data;

      if (this.ItemList) {
        this.CategorySelected = true;
      }
      else {
        this.CategorySelected = true;
        alert("There are no products under this category. Click the '+' button to add a new Product")
      }
    }
    )

  }

  //just a back button
  Back()
  {
    this.CategorySelected = false;
  }

  CancelSale() {
    this.api.CancelSale().subscribe(zz => {
      this.CartItems = [];
      this.CalculateTotals();
    });
  }

  IncreaseQuantity(PS_ID: any, QuantityOnHand: any, Quantity: any) {
    if (Quantity > QuantityOnHand) {
      alert("Can't select more items than in stock.")
    }
    else {
      this.api.IncreaseQuantity(PS_ID).subscribe(zz => {
        this.api.getCartItems().subscribe(data => {
          this.CartItems = data;
          this.CalculateTotals();
        })
      });

    }
  }

  DecreaseQuantity(PS_ID: any) {
    this.api.DecreaseQuantity(PS_ID).subscribe(zz => {
      this.api.getCartItems().subscribe(data => {
        this.CartItems = data;
        this.CalculateTotals();
      })
    });
  }

  SelectItem(_Product_Size_ID: any) {

    this.api.AddCartItem(_Product_Size_ID).subscribe(zz => {
      if (zz == "success") {
        this.api.getCartItems().subscribe(data => {
          this.CartItems = data;
          this.CalculateTotals();
        })
        this.CategorySelected = false;
      }
    })


  }

  //colour array for Category buttons, you can change them to colours of prefrence
  Colors = [
    "#fe019a",
    "#39ff14",
    "#04d9ff",
    "#faed27",
    "#bc13f3",
    "#ff073a",
    "#cfff04",
    "#ff0055",
    "#48929B",
    "#003171",
    "#FFDDCA",
    "#D9B611",
    "#ff5555",

  ]

  //opens the pay dialog
  Pay() {
    if (this.CartItems.length > 0) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.width = '500px';
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = this.BalanceDue;

      const dialogRef = this.dialog.open(PaymentDialog, dialogConfig);

      dialogRef.afterClosed().subscribe(res => {

          this.api.getCartItems().subscribe(data => {
            this.CartItems = data;
            this.CalculateTotals();
          })
      })
    }
    else {
      alert("Add some items before making a payment")
    }
  }
}

@Component({
  selector: "enter-barcode",
  templateUrl: './Barcode/barcode.html',
  styleUrls: ['./Barcode/barcode.css']
})
export class BarcodeDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
  public dialogRef: MatDialogRef<BarcodeDialog>) { }

  ngOnInit() {

  }

  //code to use a barcode scanner:
  //https://www.npmjs.com/package/ngx-barcode-scanner

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
}


@Component({
  selector: "make-payment",
  templateUrl: './Payment/Payment.html',
  styleUrls: ['./Payment/payment.css']
})
export class PaymentDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
  public dialogRef: MatDialogRef<PaymentDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public api:SaleService) { }

  BalanceDue: any;
  AmountPaid = new FormControl('', [Validators.required, Validators.min(1)]);

  getErrorMessage() {
    if (this.AmountPaid.hasError('required')) {
      return 'You must enter a value';
    }

    return this.AmountPaid.hasError('min') ? 'Amount not valid' : '';
  }

  ngOnInit() {

    this.BalanceDue = Math.round(this.data*100)/100
  }

  PayCard()
  {
    alert("Card Machine not detected")
  }

  PayCash()
  {
    if (this.AmountPaid.invalid) {
      alert("Enter amount paid details")
      this.AmountPaid.markAllAsTouched();
      return;
    }

    if (this.AmountPaid.value < this.BalanceDue)
    {
      alert("Amount is still over due. Re-enter correct amount")
      return;
    }

    let AmountPaid = this.AmountPaid.value


    this.api.MakeSale(AmountPaid).subscribe((info:any) =>
    {
      if(info == "success")
      {
        alert("Payment successfully captured")

      }
      else
      {
        alert("Payment failed to capture due to: " + info.Message)
        this.dialogRef.close()
      }
    })

  }
}


