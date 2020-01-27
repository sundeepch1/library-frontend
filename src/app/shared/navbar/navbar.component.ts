import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentStatus: any;
  public hideShowHeader: boolean = false;
  constructor(private commonService: CommonService, private router: Router,
              private authService: AuthService, private location: Location) { }

  ngOnInit() {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.commonService.isLoggedIn().subscribe(result =>{
          this.currentStatus = result;
        });

        let baseUrl: string = this.location.path();

        if (
          baseUrl.includes('/signin')
          || baseUrl.includes('/signup')
          || baseUrl.includes('/forgotPassword')) {
          this.hideShowHeader = true;
        } else {
          this.hideShowHeader = false;
        }
      }
    });

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
