import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl('',[
        Validators.required,

      ])
    })
  }

  signin(){
    let signinData = this.signinForm.getRawValue();
    this.authService.loginUser(signinData).subscribe((response)=>{
      if(response.token){
        localStorage.setItem('currentUser', JSON.stringify(response));
        if(response.user.role == 'ADMIN' || response.user.role == 'ADMIN'){
          this.router.navigate(['/manage/manage-user']);
        }else{
          this.router.navigate(['/user/user-details']);
        }
      }
    })
  }
}