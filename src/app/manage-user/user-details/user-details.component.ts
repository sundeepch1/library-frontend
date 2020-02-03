import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { ToastrService } from 'ngx-toastr'; 
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId : number;
  userInfo: any;
  constructor(private route: ActivatedRoute, private userservice: UserService, 
    private commonService: CommonService, private  toastrService: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.userId = +params['userId'];
    });
    this.getUserById();
  }

  getUserById(){
    if(!Number.isNaN(this.userId)) {
      this.userservice.getUserById(this.userId).subscribe(user =>{
        this.userInfo = user;
      }, error =>{
        this.toastrService.error('Try later');
      })
    }else{
      let user = this.commonService.getLoggedInUser();
      this.userservice.getUserById(user.id).subscribe(user =>{
        this.userInfo = user;
      }, error =>{
        this.toastrService.error('Try later');
      })
    }
  }

}
