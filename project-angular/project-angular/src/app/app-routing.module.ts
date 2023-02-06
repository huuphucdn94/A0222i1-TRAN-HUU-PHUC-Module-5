import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./component/customer/customer.component";
import {UpdateCustomerComponent} from "./component/customer/update-customer/update-customer.component";


const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "list"
  },
  {
    path: "list", component: CustomerComponent
  },
  {
    path: "list/create", component: UpdateCustomerComponent
  },
  {
    path: "list/edit/:id", component: UpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
