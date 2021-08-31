import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleComponent } from './sale/sale.component';
import { SaleCategoriesComponent } from './sale-categories/sale-categories.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { DeleteProductCategoryComponent } from './delete-product-category/delete-product-category.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SearchProductCategoryComponent } from './search-product-category/search-product-category.component';
import { SupplierOrderComponent } from './supplier-order/supplier-order.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { PaymentComponent } from './make-sale/payment/payment.component';
import { BarcodeComponent } from './make-sale/barcode/barcode.component';

//Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

//API Service
import { SaleService } from './services/sale.service';
import {HttpClientModule} from '@angular/common/http';


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
    MakeSaleComponent,
    PaymentComponent,
    BarcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonToggleModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, SaleService],
  bootstrap: [AppComponent]

})
export class AppModule { }
