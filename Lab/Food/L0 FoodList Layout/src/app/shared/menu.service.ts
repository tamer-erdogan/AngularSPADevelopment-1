import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class MenuService {
  constructor(private httpClient: HttpClient) {}

  getMenuItems(): Observable<string[]> {
    // let url = "assets/menuItems.json";
    return this.httpClient.get<string[]>(environment.apiUrl);
  }
}
