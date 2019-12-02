import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Voucher } from "./model";
import { environment } from "src/environments/environment";

@Injectable()
export class VouchersService {
  constructor(private http: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(environment.apiURL);
  }
}
