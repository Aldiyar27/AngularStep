import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RofileComponent } from './rofile/rofile.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  {path: '', component: RofileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RofileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
