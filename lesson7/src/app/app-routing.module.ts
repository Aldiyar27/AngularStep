import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RofileComponent } from './rofile/rofile.component'; 
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  {path: "regis", component: RofileComponent}, 
  {path: "login", component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [RofileComponent];

