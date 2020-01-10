import { catchError } from 'rxjs/operators';
import { States } from './states';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly server = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  getStates(): Observable<States[]> {
    return this.http.get<States[]>(`${this.server}/utils/states`)
    .pipe(
      catchError((e) => {
        console.error(e);
        return throwError(e);
      })
    );
  }

}
