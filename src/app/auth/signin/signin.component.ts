import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user:any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(user: any){
    this.authService.loginUser(user).subscribe((response)=>{
      if(response.token){
        localStorage.setItem('currentUser', JSON.stringify(response));
        if(response.user.role == 'ADMIN'){
          this.router.navigate(['/dashboard/admin-dashboard']);
        }else{
          this.router.navigate(['/dashboard/user-dashboard']);
        }
      }
    })
  }
}