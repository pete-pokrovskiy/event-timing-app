import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  loginValue: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit() {

    this.loginValue = new FormControl();
    this.password = new FormControl();

    this.loginForm = new FormGroup(
      {
        loginValue: this.loginValue,
        password: this.password
      }
    );

  }

  login(){
    console.log('trying to log in..');
  }

}
