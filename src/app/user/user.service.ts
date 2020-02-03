import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable <any>{
    return this.http.get('/api/users');
  }

  getUser(): Observable <any>{
    return this.http.get('/user');
  }

  getUserById(userId): Observable <any>{
    return this.http.get('/api/user/' + userId);
  }

  updateUser(user: any): Observable <any>{
    return this.http.put('/api/user', user);
  }

  changePassword(userInfo: any): Observable <any>{
    return this.http.put('/api/changepassword', userInfo);
  }
}
