import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly server = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.server}/register`, user);
  }
}
