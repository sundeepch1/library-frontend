import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:any = {};
  constructor(private userService : UserService) { }

  ngOnInit() {
  }


  saveUser(user: any, userForm:any){
    this.userService.saveUser(user).subscribe((response)=>{
      if(response){
        console.log(response);
        userForm.reset();
      }
    })
  }
}
