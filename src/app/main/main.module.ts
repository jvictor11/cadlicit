import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { BiddingsComponent } from './biddings/biddings.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    BiddingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
