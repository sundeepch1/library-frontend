import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  constructor(private http: HttpClient) { }

  deleteUserById(userId): Observable <any>{
    return this.http.delete('/api/user/' + userId)
  }
}
