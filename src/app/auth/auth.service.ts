import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient, private router: Router) { }

  saveUser(user:any): Observable <any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    return this.http.post('/api/registration', user,{headers: headers});
  }

  loginUser(user:any): Observable <any>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    return this.http.post('/api/login', user,{headers: headers});
  }
  
  // clearStatus(){
  //   this.subject.next();
  // }

  // getStatus(): Observable<any>{
  //   return this.subject.asObservable();
  // }

  logout(){
    localStorage.removeItem('currentUser');
  }
}