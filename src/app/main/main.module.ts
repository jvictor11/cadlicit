import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { BiddingsComponent } from './biddings/biddings.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    BiddingsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
