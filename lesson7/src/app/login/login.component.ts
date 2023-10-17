import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent {
  constructor(private httpClient: HttpClient) {}

  login!: string;
  password!: string;

  data!: string;

  onSubmit(){
    this.httpClient.get('https://api.nancydrew.me/authUser?key=X9ZO2Lqf&login=' + this.login + '&password=' + this.password + '&lang=kk')
    .subscribe((response) => this.data = JSON.stringify(response))
  }
}
