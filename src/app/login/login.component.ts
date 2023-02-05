import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginUserService } from '../serivce/login-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: LoginUserService, private route: Router) { }

  ngOnInit(): void {
   
  }

  userLogin(data: any){
    console.log(data);
    
    this.route.navigate(["/load"]);
    setTimeout(() => {
      this.userService.Login(data);
    }, 5000);   
  }

}
