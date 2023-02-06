import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  nav(){
    this.route.navigate(["/dashboard"]);
  }

}
