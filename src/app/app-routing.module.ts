import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';

import { SupplierOrderComponent } from './supplier-order/supplier-order.component';
import { SaleComponent } from './sale/sale.component';
import { InventoryOptionsComponent } from './inventory-options/inventory-options.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { DeleteProductCategoryComponent } from './delete-product-category/delete-product-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  {
    path:"supplier-order-options",
    component: SupplierOrderComponent
  },

  {
    path:"inventory-options",
    component: InventoryOptionsComponent
  },

  {
    path:"add-product-category",
    component: AddProductCategoryComponent
  },

  {
    path:"delete-product-category",
    component: DeleteProductCategoryComponent
  },
  {
    path:"",
    component: MakeSaleComponent
  },
  {
    path:"payment-method",
    component: PaymentMethodComponent
  },

  
  {
     path: '', pathMatch: 'full', redirectTo: 'login' 
  },
  {
    path: 'login', component: LogInComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
