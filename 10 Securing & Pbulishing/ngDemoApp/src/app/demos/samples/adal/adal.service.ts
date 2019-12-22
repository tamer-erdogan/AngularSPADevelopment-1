import { Injectable } from "@angular/core";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ADALService {
  constructor(
    private adalSvc: MsAdalAngular6Service,
    private httpClient: HttpClient
  ) {
    this.user = this.adalSvc.userInfo;
  }

  user: any;
  adalToken = "adelToken";

  logIn() {
    this.adalSvc.login();
  }

  logOut() {
    this.adalSvc.logout();
    localStorage.setItem(this.adalToken, null);
  }

  query(endpoint: any, query: string, callback) {
    this.adalSvc.acquireToken("graphApiUri").subscribe((token: string) => {
      localStorage.setItem(this.adalToken, token);

      let header = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      };

      this.httpClient
        .get(`${endpoint}${query}`, header)
        .subscribe(data => callback(data));
    });
  }

  createEvent(item, cal) {
    this.adalSvc.acquireToken("graphApiUri").subscribe((token: string) => {
      localStorage.setItem(this.adalToken, token);

      let header = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      };

      this.httpClient
        .post(`${environment.o365Config.endpoints.graphApiUri}${cal}`, header)
        .subscribe(data => console.log(data));
    });
  }
}
