import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public loginuser: any = {};
  public users: any = [];
  constructor(private userService: UserService ,private loginAuthService: LoginAuthService) { 
    this.loginAuthService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllUsers(this.loginuser.token).subscribe(users =>{
      this.users = users;
    })
  }

}
