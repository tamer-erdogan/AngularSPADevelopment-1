import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Voucher } from "./model";
import { environment } from "src/environments/environment";

@Injectable()
export class VouchersService {
  constructor(private http: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(environment.vouchersAPI);
  }

  getVoucher(id: number): Observable<Voucher> {
    return this.getVouchers().pipe(
      map(v => v.find((v: Voucher) => v.ID == id))
    );
  }

  insertVoucher(v) {}

  updateVoucher(v) {}
}
