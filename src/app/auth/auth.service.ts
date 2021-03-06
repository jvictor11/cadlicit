import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly server = 'http://localhost:3000/auth';

  private subjUser$: BehaviorSubject<User> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.server}/register`, user);
  }

  login(credentials: {email: string, password: string}): Observable<User> {
    return this.http
      .post<User>(`${this.server}/login`, credentials)
      .pipe(
        tap((u: User) => {
        localStorage.setItem('token', u.token);
        this.subjLoggedIn$.next(true);
        this.subjUser$.next(u);
      })
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.subjLoggedIn$.asObservable();
  }

  getUser(): Observable<User> {
    return this.subjUser$.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null);
    this.router.navigateByUrl('/auth/login');
  }


}
