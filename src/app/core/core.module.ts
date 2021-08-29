import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { SelectedproductsComponent } from './selectedproducts/selectedproducts.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



@NgModule({
  declarations: [
    ProductsComponent,
    SelectedproductsComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
