import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  Login(data: any){
    

    this.httpClient.post("https://rduttapf26l0br.opentext.net:8443/otdsws/rest/authentication/credentials",data).subscribe((result: any)=>{
     localStorage.setItem("ticket",result.ticket);
      
    
     
     if(localStorage.getItem("ticket")?.includes(result.ticket)){
      this.router.navigate(['/dashboard']);
     } 
    })
  }
}
