import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FBAuthService } from "./firebase-auth.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private as: FBAuthService) {
    as.getToken().subscribe(t => {
      this.token = t;
    });
  }

  token: string = null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.token);
    if (environment.authEnabled == false || this.token != null) {
      return true;
    } else {
      this.router.navigate(["/"]);
    }
  }
}
