import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { BiddingsComponent } from './biddings/biddings.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { AnalysisComponent } from './biddings/analysis/analysis.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  declarations: [
    CompaniesComponent,
    BiddingsComponent,
    MainComponent,
    DashboardComponent,
    PieChartComponent,
    BarChartComponent,
    AnalysisComponent,
    BadgeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    ChartsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
