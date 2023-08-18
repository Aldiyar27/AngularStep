import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  email: string
  login: string
  password: string
  name: string
}

interface UserReq {
  email?: string
  login?: string
  password?: string
  name?: string
}

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private baseUrl = 'https://api.nancydrew.me/addUser?key=X9ZO2Lqf&';

  constructor(private httpClient: HttpClient) { }
  
  Url(user: UserReq) {
    return `login=${user.login}&password=${user.password}&email=${user.email}&name=${user.name}`
  }
  signUp(user: User) {
    const url = this.baseUrl + this.Url(user);
    return this.httpClient.post(url, user);
  }
  signIn(user: Omit<User, 'email' | 'name'>) {
    const url = this.baseUrl + this.Url(user);
    return this.httpClient.post(url, user);
  }
}