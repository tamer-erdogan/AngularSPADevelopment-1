import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { VouchersService } from "../voucher.service";
import { AccountsService } from "./account.service";
import { Voucher, BalanceAccount } from "../model";
import { lateVoucher } from "../late-voucher";

@Injectable({ providedIn: "root" })
export class DataStoreService {
  //Would not do this in real life - just do give you an idea how a store could work
  //Too much code duplication and boilerplate
  constructor(private vs: VouchersService, private as: AccountsService) {
    this.initVouchers();
    this.initAccounts();
    this.addLateVoucher();
  }

  //Vouchers

  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.vouchersArray
  );

  initVouchers() {
    this.vs.getVouchers().subscribe(data => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });
  }

  addLateVoucher() {
    setTimeout(() => {
      this.vouchersArray.push(<Voucher>lateVoucher);
      this.vouchers.next(this.vouchersArray);
    }, 8000);
  }

  getAllVouchers(): Observable<Voucher[]> {
    return this.vouchers;
  }

  getVoucherById(id: number): Observable<Voucher> {
    return this.vouchers.pipe(map(m => m.find(mi => mi.ID == id)));
  }

  insertVoucher(v: Voucher): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.vs.insertVoucher(v).subscribe(
        () => {
          this.initVouchers();
          resolve();
        },
        err => reject(err)
      );
    });
  }

  updateVoucher(v: Voucher): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.vs.updateVoucher(v).subscribe(
        () => {
          this.initVouchers();
          resolve();
        },
        err => reject(err)
      );
    });
  }

  deleteVoucher(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.vs.deleteVoucher(id).subscribe(
        () => {
          this.initVouchers();
          resolve();
        },
        err => reject(err)
      );
    });
  }

  //Accounts
  private accountsArray: BalanceAccount[] = [];
  private accounts: BehaviorSubject<BalanceAccount[]> = new BehaviorSubject(
    this.accountsArray
  );

  initAccounts() {
    this.as.getAccounts().subscribe(data => {
      this.accountsArray = data;
      this.accounts.next(this.accountsArray);
    });
  }

  getAllAccounts(): Observable<BalanceAccount[]> {
    return this.accounts;
  }

  getAccountById(id: number): Observable<BalanceAccount> {
    return this.accounts.pipe(map(m => m.find(mi => mi.ID == id)));
  }

  saveAccount(account: BalanceAccount): Observable<boolean> {
    if (account.ID == 0) {
      this.as.insertAccount(account);
    } else {
      this.as.updateAccount(account);
    }
    this.initAccounts();
    return Observable.create(true);
  }
}
