import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FacilityComponent} from "./component/facility/facility.component";
import { UpdateFacilityComponent } from './component/facility/update-facility/update-facility.component';
import {ReactiveFormsModule} from "@angular/forms";

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FacilityComponent,
    UpdateFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
