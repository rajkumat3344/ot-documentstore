import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {



  constructor( private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private route: Router) { }

 

  

  confirm(event: Event) {
    
   
    this.confirmationService.confirm({
      target: event.target as HTMLInputElement,
      message: "Are you sure that you want to create?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        setTimeout(() => {
          if(this.confirmationService.accept){
            this.route.navigate(["/task"]);
          }
        }, 1000);
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
    
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
