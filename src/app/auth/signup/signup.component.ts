import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  public alertMessage ;
  constructor(private authService : AuthService, private toastrService:ToastrService, private router: Router) { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required
      ]),
      role: new FormControl('', [
        Validators.required
      ])
    });
  }


  signup(){
    let signupData=this.signupForm.getRawValue();
    this.authService.saveUser(signupData).subscribe((response)=>{
      if(response){
        if(response.message.indexOf('email_exist') !== -1){
          this.alertMessage = this.signupForm.get('email').value;
        }else{
          this.toastrService.success('You are successfully registered');
          this.router.navigate(['/auth/signin'])
          this.signupForm.reset();
        }
      }
    })
  }
}
