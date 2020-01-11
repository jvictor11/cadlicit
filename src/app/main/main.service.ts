import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly server = 'http://localhost:3000/api';

  readonly cep = 'https://viacep.com.br/ws'; // /json

  constructor(
    private http: HttpClient,
  ) { }

  getCep(cep) {
    return this.http.get(`${this.cep}/${cep}/json`);
  }

  getStates(): Observable<any> {
    return this.http.get<any>(`${this.server}/utils/states`)
    .pipe(
      catchError((e) => {
        console.error(e);
        return throwError(e);
      })
    );
  }

}
