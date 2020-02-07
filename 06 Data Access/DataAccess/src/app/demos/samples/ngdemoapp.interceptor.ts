import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class NgDemoAppInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${environment.token}` }
    });
    console.log('Vouchers-Interceptor added Bearer Token for request', cloned);
    return next.handle(cloned);
  }
}
