import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(credentials: any) {
    return this.http.post(`${environment.apiUrl}/login`, credentials)
      .pipe(map(
          (response) => {
          const result = response;
          console.log(response)
          if ( result['token']) {
            localStorage.setItem('token', result['token']);
            return true;
          } else {
            return false;
          }
        }
      ));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    } else {
      const isExpired = jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    } else {
      return new JwtHelperService().decodeToken(token);
    }
  }

}
