import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';


@NgModule({
  declarations: [
    UserDetailsComponent,
    EditProfileComponent,
    GenerateReportComponent,
    ChangePasswordComponent
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    NgBootstrapFormValidationModule
  ]
})
export class UserModule { }
