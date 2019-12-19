import { Observable } from "rxjs";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { FBAuthService } from "./FBAuthService";
import { Inject, forwardRef } from "@angular/core";

export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject(forwardRef(() => FBAuthService)) as: FBAuthService) {
    as.getToken().subscribe(t => {
      this.token = t;
    });
  }

  token: string;

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token != "") {
      let cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${this.token}` }
      });
      console.log("Interceptor added Bearer Token for request", cloned);
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
