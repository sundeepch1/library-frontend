import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(user: any){
    this.userService.loginUser(user).subscribe((response)=>{
      if(response.token){
        localStorage.setItem('currentUser', JSON.stringify(response));

        if(response.user.role == 'ADMIN'){
          this.router.navigate(['/admindashboard']);
        }else{
          this.router.navigate(['/userdashboard']);
        }
      }
    })
  }
}
