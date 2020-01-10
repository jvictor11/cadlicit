import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly server = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.server}/company/all`)
      .pipe(
        catchError((e) => {
          console.error(e);
          return throwError(e);
        })
      );
  }

}
