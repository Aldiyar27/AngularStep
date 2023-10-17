import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rofile',
  templateUrl: './rofile.component.html',
  styleUrls: ['./rofile.component.css'],
})
export class RofileComponent {
  constructor(private httpClient: HttpClient) {}

  login!: string;
  name!: string;
  email!: string;
  password!: string;


  onSubmit(){
    this.httpClient.get('https://api.nancydrew.me/addUser?key=X9ZO2Lqf&login=' + this.login 
    + '&password=' + this.password 
    + '&email=' + this.email
    + '&name=' + this.name 
    + '&lang=kk')
    .subscribe((response) => console.log("Add"));
  }
}