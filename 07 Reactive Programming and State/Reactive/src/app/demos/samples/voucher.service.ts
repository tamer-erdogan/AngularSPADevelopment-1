import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Voucher } from "./model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class VouchersService {
  constructor(private httpClient: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.httpClient.get<Voucher[]>(environment.apiUrl);
  }

  getVoucher(id: number): Observable<Voucher> {
    return this.httpClient.get<any>(environment.apiUrl + "/" + id);
  }

  insertVoucher(voucher: Voucher): Observable<any> {
    return this.httpClient.post<Voucher>(environment.apiUrl, voucher);
  }

  updateVoucher(voucher: Voucher): Observable<any> {
    return this.httpClient.put<Voucher>(environment.apiUrl, voucher);
  }

  deleteVoucher(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/" + id);
  }
}
