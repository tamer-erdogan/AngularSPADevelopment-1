import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { Voucher } from './model';
import { VouchersService } from './voucher.service';

@Injectable()
export class VoucherResolver implements Resolve<Voucher> {
  constructor(private vs: VouchersService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Voucher | Observable<Voucher> | Promise<Voucher> {
    const id = +route.params['id'];
    return this.vs.getVoucher(id);
  }
}
