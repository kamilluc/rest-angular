import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthService {

  public token: string;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string) {
    let credentials = JSON.stringify({ _username: username, _password: password });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let req = this.http.post('http://restapp.dev/api/user/login_check', credentials, {headers: headers});
    let req = this.http.post('http://restapp.dev/app_dev.php/user/login_check', credentials, {headers: headers});
    return req.map(response => {
      // pobierz token
      let token = response.json() && response.json().token;
      if (token) {
        // zapisz token lokalnie
        this.token = token;

        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
      }
    });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}