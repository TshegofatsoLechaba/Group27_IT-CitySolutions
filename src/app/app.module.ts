import { SaleService } from './services/sale.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleComponent } from './sale/sale.component';
import { SaleCategoriesComponent } from './sale-categories/sale-categories.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { DeleteProductCategoryComponent } from './delete-product-category/delete-product-category.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SearchProductCategoryComponent } from './search-product-category/search-product-category.component';
import { SupplierOrderComponent } from './supplier-order/supplier-order.component';
import { InventoryOptionsComponent } from './inventory-options/inventory-options.component';
import { SearchClientComponent } from './search-client/search-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

//components used
//import { MakeSaleComponent, BarcodeDialog, PaymentDialog } from './make-sale/make-sale.component';

//Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';


//API Service
import {HttpClientModule} from '@angular/common/http';
import { BarcodeDialog, MakeSaleComponent, PaymentDialog } from './make-sale/make-sale.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { MatRippleModule } from '@angular/material/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { GlobalConfirmComponent } from './modals/globals/global-confirm/global-confirm.component';
import { EditPaymentMethodComponent } from './edit-payment-method/edit-payment-method.component';
import { SupplierOptionsComponent } from './supplier-options/supplier-options.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    SaleCategoriesComponent,
    AddProductCategoryComponent,
    DeleteProductCategoryComponent,
    ProductCategoryComponent,
    SearchProductCategoryComponent,
    SupplierOrderComponent,
    InventoryOptionsComponent,
    SearchClientComponent,
    UpdateClientComponent,
    MakeSaleComponent,
    PaymentMethodComponent,
    BarcodeDialog,
    PaymentDialog,
    LogInComponent,
    AddPaymentMethodComponent,
    GlobalConfirmComponent,
    EditPaymentMethodComponent,
    SupplierOptionsComponent,
    AddSupplierComponent,
    SuppliersComponent,
    EditSupplierComponent,
  ],
  imports: [
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatRippleModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, SaleService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  entryComponents:[BarcodeDialog, PaymentDialog]
})
export class AppModule { }
