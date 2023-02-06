import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ListItemComponent } from './home/list-item/list-item.component';
import { ContentComponent } from './home/content/content.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';

import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { ConfirmationService, MessageService } from "primeng/api";
import { TaskFormComponent } from './home/task-form/task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListItemComponent,
    ContentComponent,
    LoaderComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    ConfirmPopupModule,
    ToastModule,
    ButtonModule
   
  ],
  providers: [HttpClientModule,ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
