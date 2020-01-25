import { Component } from '@angular/core';
import { LoginAuthService } from './login-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-frontend';

  public currentStatus: any;

  constructor(private router: Router, private loginAuthService: LoginAuthService) { 
    this.loginAuthService.getStatus().subscribe(currentStatus =>{
      this.currentStatus = currentStatus;
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }
}
