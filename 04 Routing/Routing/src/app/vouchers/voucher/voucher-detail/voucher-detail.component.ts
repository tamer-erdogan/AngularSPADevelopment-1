import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VoucherDetail, BalanceAccount } from '../../model';

@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html',
  styleUrls: ['./voucher-detail.component.scss'],
})
export class VoucherDetailComponent implements OnInit {
  @Input() detail: VoucherDetail;
  @Input() accounts: BalanceAccount[];
  @Output() detailSaved: EventEmitter<VoucherDetail> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.accounts);
  }

  saveDetail() {
    this.detailSaved.emit(this.detail);
  }
}
