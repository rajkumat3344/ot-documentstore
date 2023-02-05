import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginUserService } from '../serivce/login-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });


  constructor(private userService: LoginUserService, private route: Router) { }

  ngOnInit(): void {
    
  }

  userLogin(data: any){
    
    this.route.navigate(['/load']);
    setTimeout(() => {
      this.userService.Login(data.value);
    }, 5000);   
  }

}
