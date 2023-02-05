import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: HomeComponent},
  {path: "load",component: LoaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
