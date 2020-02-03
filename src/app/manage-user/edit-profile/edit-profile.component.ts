import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../..//user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public userId: number;
  public userForm: any;
  public userInfo: any;
  constructor(private commonService: CommonService, private toastrService: ToastrService,
              private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.userId = +params['userId'];
    });

    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      phoneNumber: new FormControl('', [
        Validators.required
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
    });

    this.getUserById();
  }

  getUserById(){
    if(!Number.isNaN(this.userId)){
      this.userService.getUserById(this.userId).subscribe(user => {
        this.setUserForm(user)
        this.userInfo = user;
      },error =>{
        this.toastrService.error('Try later');
      })
    }else{
      let user = this.commonService.getLoggedInUser();
      this.userService.getUserById(user.id).subscribe((user: any) =>{
        this.setUserForm(user)
        this.userInfo = user;
      }, error => {
        this.toastrService.error('Try later');
      })
    }
  }

  setUserForm(user:any){
    this.userForm.get('firstName').setValue(user.firstName);
    this.userForm.get('lastName').setValue(user.lastName);
    this.userForm.get('email').setValue(user.email);
    this.userForm.get('phoneNumber').setValue(user.phoneNumber);
    this.userForm.get('dateOfBirth').setValue(user.dateOfBirth);
    this.userForm.get('role').setValue(user.role);
  }

  saveUser(){
    let userData = this.userForm.getRawValue();
    userData['id'] = this.userInfo.id;
    userData['createdDate']= this.userInfo.createdDate;
    userData['enabled'] = this.userInfo.enabled;
    this.userService.updateUser(userData).subscribe(response =>{
        this.router.navigate(['/manage/user-details', this.userId])
    },error => {
      this.toastrService.error('Try later');
    })
  }

}
