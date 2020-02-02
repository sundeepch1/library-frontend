import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-frontend';
  public hideShowHeader:boolean = false;
  public routerOutlet:boolean = false;
  public manageUser:boolean = false;

  constructor(private commonService: CommonService, private router: Router,
    private authService: AuthService, private location: Location) { }

  ngOnInit(){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        let baseUrl: string = this.location.path();
        this.commonService.isLoggedIn().subscribe(result =>{
          this.routerOutlet = result;
        });

        if (
          baseUrl.includes('/signin')
          || baseUrl.includes('/signup')
          || baseUrl.includes('/forgotPassword')) {
          this.hideShowHeader = true;
        } else {
          this.hideShowHeader = false;
        }

        if(baseUrl.includes('/manage/manage-user')){
          this.manageUser = true;
          //this.routerOutlet = false;
        }else{
          this.manageUser = false;
          //this.routerOutlet = true;
        }
      }
    });
  }
}
