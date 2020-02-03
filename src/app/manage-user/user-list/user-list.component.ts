import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { ManageUserService } from '../manage-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList: any;
  constructor(private userService: UserService, private toasterService: ToastrService,
    private manageUserService: ManageUserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userList = undefined;
    this.userService.getAllUsers().subscribe(response => {
      this.userList = response;
    }, error =>{
      this.toasterService.error('Try later');
    })
  }

  deleteUserById(user){
    this.manageUserService.deleteUserById(user.id).subscribe(response =>{
      this.toasterService.success(user.email + ' is deleted successfully.');
      this.getAllUsers();
    }, error =>{
      this.toasterService.error('Try later');
    })
  }

}
