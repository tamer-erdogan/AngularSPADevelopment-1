import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Voucher } from "./model";
import { environment } from "src/environments/environment";

@Injectable()
export class VouchersService {
  constructor(private httpClient: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.httpClient.get<Voucher[]>(environment.apiUrl + "api/vouchers");
  }

  getVoucher(id: number): Observable<Voucher> {
    return this.httpClient.get<Voucher>(
      environment.apiUrl + "api/vouchers/" + id
    );
  }

  insertVoucher(voucher: Voucher): void {
    this.httpClient
      .post<Voucher>(environment.apiUrl + "api/vouchers", voucher)
      .subscribe(
        () => console.log(`voucher with id ${voucher.ID} inserted`),
        err => console.log(err)
      );
  }

  updateVoucher(voucher: Voucher): void {
    this.httpClient
      .put<Voucher>(environment.apiUrl + "api/vouchers", voucher)
      .subscribe(
        () => console.log("voucher with updated", voucher),
        err => console.log(err)
      );
  }

  deleteVoucher(id: number): void {
    this.httpClient
      .delete(environment.apiUrl + "api/vouchers/" + id)
      .subscribe(() => console.log("deleting voucher with id " + id));
  }
}
