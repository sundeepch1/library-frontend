import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user:any = {};
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }


  saveUser(user: any, userForm:any){
    this.authService.saveUser(user).subscribe((response)=>{
      if(response){
        console.log(response);
        userForm.reset();
      }
    })
  }
}
