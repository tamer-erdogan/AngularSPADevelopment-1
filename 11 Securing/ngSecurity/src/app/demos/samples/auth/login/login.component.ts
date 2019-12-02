import { Component, OnInit } from '@angular/core';
import { FBAuthService } from '../FBAuthService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private as: FBAuthService) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  logIn(form: FormGroup) {
    this.as.logOn(form.value);
  }
}
