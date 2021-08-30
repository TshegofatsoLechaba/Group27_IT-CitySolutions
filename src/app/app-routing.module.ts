import { SupplierOrderComponent } from './supplier-order/supplier-order.component';
import { SaleCategoriesComponent } from './sale-categories/sale-categories.component';
import { SaleComponent } from './sale/sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: SaleComponent
  },
  {
    path:"supplier-order-options",
    component: SupplierOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
