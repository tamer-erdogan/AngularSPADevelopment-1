import { Component, OnInit } from "@angular/core";
import { FirebaseAuthService } from "../../firebase/firebase-auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private as: FirebaseAuthService) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  logIn(form: FormGroup) {
    this.as.logOn(form.value);
  }
}
