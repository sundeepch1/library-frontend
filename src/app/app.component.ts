import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, NavigationEnd, Event, ActivatedRoute } from '@angular/router';
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
  public manageSidebar: boolean = false;
  public userId :number;
  constructor(private commonService: CommonService, private router: Router,
    private authService: AuthService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(){


    this.userId = +this.route.snapshot.paramMap.get('userId');

    this.router.events.subscribe((event: Event) => {

      if(this.router.routerState.root.firstChild && this.router.routerState.root.firstChild.firstChild){
        this.userId = +this.router.routerState.root.firstChild.firstChild.snapshot.params.userId;
      }

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
        }else{
          this.manageUser = false;
        }

        if(baseUrl.includes('/manage/')){
          this.manageSidebar = true;
        }else{
          this.manageSidebar = false;
        }
      }
    });
  }
}
