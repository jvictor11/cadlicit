import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../company.service';
import { Observable } from 'rxjs';
import { Company } from '../company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companies$ = this.companyService.getCompany();
  }

}
