import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from '../manage-user/user-details/user-details.component';
import { EditProfileComponent } from '../manage-user/edit-profile/edit-profile.component';


const routes: Routes = [
  {
    path:'manage-user',
    component: UserListComponent
  },
  {
    path:'user-details/:userId',
    component: UserDetailsComponent
  },
  {
    path:'edit-profile/:userId',
    component: EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserRoutingModule { }
