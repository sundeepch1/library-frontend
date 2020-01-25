import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  public loginuser: any = {};
  public user: any = {};
  constructor(private userService: UserService ,private loginAuthService: LoginAuthService) { 
    this.loginAuthService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getUser(this.loginuser.token).subscribe(user =>{
      this.user = user;
    }, error =>{
      console.log(error);
    })
  }

}
