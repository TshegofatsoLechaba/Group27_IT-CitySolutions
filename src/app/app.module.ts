import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
