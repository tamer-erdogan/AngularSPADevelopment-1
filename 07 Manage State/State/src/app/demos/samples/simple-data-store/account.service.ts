import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BalanceAccount } from "../model";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class AccountsService {
  constructor(private httpClient: HttpClient) {}

  accounts = null;

  getAccounts(): Observable<BalanceAccount[]> {
    return this.httpClient.get<BalanceAccount[]>(
      environment.apiUrl + "accounts"
    );
  }

  getAccount(id: number): Observable<BalanceAccount> {
    return this.httpClient.get<BalanceAccount>(
      environment.apiUrl + "accounts/" + id
    );
  }

  insertAccount(acct: BalanceAccount): void {
    this.httpClient
      .post(environment.apiUrl + "accounts", acct)
      .subscribe(() => console.log("acct inserted"));
  }

  updateAccount(acct: BalanceAccount) {
    this.httpClient
      .put(environment.apiUrl + "accounts", acct)
      .subscribe(() => console.log("acct updated"));
  }

  deleteAccount(acct: BalanceAccount): void {
    this.httpClient
      .delete(environment.apiUrl + "accounts/" + acct.ID)
      .subscribe(() => console.log("acct deleted"));
  }
}
