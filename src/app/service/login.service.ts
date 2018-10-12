import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'; import { HttpModule } from '@angular/http';

import {Observable} from 'rxjs';
import {LoginDTO} from '../models/LoginDTO';
import {MyAuthService} from './my-auth.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: MyAuthService,
              private cookie: CookieService,
              private http: HttpClient) { }
  signIn(loginDTO: LoginDTO): Observable<any> {
    return this.auth.post('http://qctravelstory-env-1.us-east-2.elasticbeanstalk.com/api/login', loginDTO);
  }

  public getToken(): string {
    return localStorage.getItem('auth');
  }
}