import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  private loading: boolean;
  private returnUrl: string;

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authService.login(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['/']);
        }, error => {
          this.snackBar.open('Wrong username or password');
          this.loading = false;
        });
  }
}
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
