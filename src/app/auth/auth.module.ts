import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';





@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule,
    NgBootstrapFormValidationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    
  ]
})
export class AuthModule { }
