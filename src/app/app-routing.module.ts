import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { TaskFormComponent } from './home/task-form/task-form.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: HomeComponent},
  {path: "load",component: LoaderComponent},
  {path: "task", component: TaskFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
