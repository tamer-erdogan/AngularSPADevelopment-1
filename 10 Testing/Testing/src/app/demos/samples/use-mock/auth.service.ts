import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  isAuth = false;

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  logIn() {
    this.isAuth = true;
  }

  logOff() {
    this.isAuth = false;
  }
}
