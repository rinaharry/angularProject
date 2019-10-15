import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string;
  token = localStorage.getItem('token');
  user: any  = new BehaviorSubject(0);

  constructor(
    private http: HttpClient) {
  }

  getUsers() {

    return this.http.get(`${environment.apiUrl}`)
      .pipe(map(
        (response: Response) => {
          const data = response;
          return data;
        })
      );
  }

  // getUser(id) {
  //   const headers = new HttpHeaders({ 'x-auth-token': this.token });
  //   return this.http.get(`${environment.apiUrl}` + id, { headers: headers})
  //     .pipe(map(
  //       (response: Response) => {
  //         const data = response;
  //         return data;
  //       })
  //     );
  // }



  createUser(payload) {

    return this.http.post(`${environment.apiUrl}`, payload)
      .pipe(map(
        (response: Response) => {
          const data = response;
          return data;
        })
      );
  }

  updateUser(payload) {
    const headers = new HttpHeaders({ 'Authorization': this.token });
    return this.http.put(`${environment.apiUrl}/${payload._id}`, payload, { headers: headers})
      .pipe(map(
        (response: Response) => {
          const data = response;
          return data;
        })
      );
  }
  deleteUser(user): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': this.token });
    return this.http.delete(`${environment.apiUrl}/${user._id}`, user)
      .pipe(
        map(
      response => {
              const data = response;
          return data;
        })
      );
  }


  activateDesactivateUser(user) {
    const headers = new HttpHeaders({ 'Authorization': this.token });
    return this.http.put(`${environment.apiUrl}/${user._id}/activedesactive`, user, { headers: headers})
      .pipe(map(
        (response: Response) => {
          const data = response;
          return data;
        })
      );
  }

}
