
import { SupplierOptionsComponent } from './supplier-options/supplier-options.component';
import { EditPaymentMethodComponent } from './edit-payment-method/edit-payment-method.component';

import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';

import { SupplierOrderComponent } from './supplier-order/supplier-order.component';
import { InventoryOptionsComponent } from './inventory-options/inventory-options.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { DeleteProductCategoryComponent } from './delete-product-category/delete-product-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

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
    path: 'login', component: LogInComponent
  },
  {
    path:"add-payment-method",
    component: AddPaymentMethodComponent
  },
  {
    path:"edit/:id",
    component: EditPaymentMethodComponent
  },
  {
    path:"supplier-options",
    component: SupplierOptionsComponent
  },
  {
    path:"create-supplier",
    component: AddSupplierComponent
  },
  {
    path:"suppliers",
    component: SuppliersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
