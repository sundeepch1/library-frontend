import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getUser().subscribe(user =>{
      console.log(user,'111111111111111111111');
    })
  }

}
