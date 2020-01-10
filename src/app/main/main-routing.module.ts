import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiddingsComponent } from './biddings/biddings.component';
import { CompaniesComponent } from './companies/companies.component';


const routes: Routes = [
  { path: 'biddings', component: BiddingsComponent },
  { path: 'companies', component: CompaniesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
