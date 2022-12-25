import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FacilityComponent} from "./component/facility/facility.component";
import {UpdateFacilityComponent} from "./component/facility/update-facility/update-facility.component";

const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "list"
  },
  {
    path: 'list', component: FacilityComponent
  },
  {
    path: 'list/create', component: UpdateFacilityComponent
  },
  {
    path: 'list/edit/:id', component: UpdateFacilityComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
