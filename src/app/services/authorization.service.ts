import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private jwtHelperService: JwtHelperService) { }

  isAuthorized(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    const token = localStorage.getItem('token');
    const decoded = this.jwtHelperService.decodeToken(token);
    if (!decoded) {
      return false;
    }

    return allowedRoles.includes(decoded['role']);
  }

}
