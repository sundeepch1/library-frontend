import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable <any>{
    return this.http.get('/users');
  }

  getUser(): Observable <any>{
    return this.http.get('/user');
  }
}
