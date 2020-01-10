import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bidding } from './bidding';

@Injectable({
  providedIn: 'root'
})
export class BiddingService {

  readonly server = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  getBidding(): Observable<Bidding[]> {
    return this.http.get<Bidding[]>(`${this.server}/bidding/all`)
      .pipe(
        catchError((e) => {
          console.error(e);
          return throwError(e);
        })
      );
  }

}
