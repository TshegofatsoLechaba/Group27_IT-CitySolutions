import { MakeSaleComponent } from './make-sale/make-sale.component';

import { SupplierOrderComponent } from './supplier-order/supplier-order.component';
import { SaleComponent } from './sale/sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"supplier-order-options",
    component: SupplierOrderComponent
  },
  {
    path:"",
    component: MakeSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
