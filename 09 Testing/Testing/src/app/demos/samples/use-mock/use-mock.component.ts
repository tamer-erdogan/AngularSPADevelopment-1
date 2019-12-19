import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-use-mock",
  templateUrl: "./use-mock.component.html",
  styleUrls: ["./use-mock.component.scss"]
})
export class UseMockComponent implements OnInit {
  constructor(private as: AuthService) {
    this.loggedIn = as.isAuthenticated();
  }

  loggedIn: boolean;

  ngOnInit() {}
}
