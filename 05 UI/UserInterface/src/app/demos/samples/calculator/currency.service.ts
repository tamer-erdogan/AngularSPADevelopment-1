import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RatesResponse } from "./rates";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  //Using https://fixer.io - Register your own key

  url: string = `http://data.fixer.io/api/latest?access_key=${
    environment.fixerAPIKey
  }`;

  rates: Map<string, number>;

  constructor(private httpClient: HttpClient) {}

  getRates(): Observable<RatesResponse> {
    return this.httpClient.get<RatesResponse>(this.url);
  }
}
