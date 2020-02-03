import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public userId: number;
  public changePasswordForm: any;
  public userInfo: any;
  public alertMessage: boolean = false;
  public didNotMatch: boolean = false;
  constructor(private commonService: CommonService, private toastrService: ToastrService,
              private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.userId = +params['userId'];
    });

    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [
        Validators.required
      ]),
      newPassword: new FormControl("", [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
    });

    this.getUserById();
  }

  getUserById(){
    if(!Number.isNaN(this.userId)){
      this.userService.getUserById(this.userId).subscribe(user => {
        this.userInfo = user;
      },error =>{
        this.toastrService.error('Try later');
      })
    }else{
      let user = this.commonService.getLoggedInUser();
      this.userService.getUserById(user.id).subscribe((user: any) =>{
        this.userInfo = user;
      }, error => {
        this.toastrService.error('Try later');
      })
    }
  }

  updateAlertMessage(){
    this.alertMessage = false;
  }

  updateDidNotMatch(){
    this.didNotMatch = false;
  }

  changePassword(){
    if(this.changePasswordForm.get('newPassword').value == this.changePasswordForm.get('confirmPassword').value){
      let changePasswordData = this.changePasswordForm.getRawValue();
      delete changePasswordData['confirmPassword'];
      changePasswordData['email']= this.userInfo.email;
      this.userService.changePassword(changePasswordData).subscribe(response => {
        if(response.message == 'false'){
          this.alertMessage = true;
        }else{
          this.toastrService.success('Your password is successfully updated.');
        }
      })
    }else{
      this.didNotMatch = true;
    }
  }

}
