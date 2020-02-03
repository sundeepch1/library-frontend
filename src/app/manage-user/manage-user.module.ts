import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserRoutingModule } from './manage-user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from '../manage-user/user-details/user-details.component';
import { EditProfileComponent } from '../manage-user/edit-profile/edit-profile.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    NgBootstrapFormValidationModule,
    TooltipModule.forRoot()
  ]
})
export class ManageUserModule { }
