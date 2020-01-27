import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
