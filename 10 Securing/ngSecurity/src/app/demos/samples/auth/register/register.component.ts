import { Component, OnInit } from '@angular/core';
import { FBAuthService } from '../FBAuthService';
import { LoginCredentials } from '../loginCred';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private as: FBAuthService) {}

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwords: new FormGroup(
        {
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(4)
          ]),
          passwordRepeat: new FormControl('', [Validators.required])
        },
        { validators: this.passwordConfirming }
      )
    });
  }

  registerUser(form: FormGroup) {
    this.as.registerUser(form.value.email, form.value.passwords.password);
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('passwordRepeat').value) {
      return { invalid: true };
    }
  }
}
