import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import { Voucher, BalanceAccount, VoucherDetail } from "../model";
import { emptyVoucher } from "./emptyVoucher";

@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.scss"],
})
export class VoucherComponent implements OnInit {
  constructor(private vs: VouchersService, private route: ActivatedRoute) {}

  voucher: Voucher = emptyVoucher;
  accounts: BalanceAccount[];
  currentDetail: VoucherDetail;

  id: number;
  readonly: true;
  fragments: string;

  ngOnInit() {
    // Change comments to see the diffenent options for processing route data
    this.readRoutesUsingSnapshot();
    // this.useResolver();
    // this.readResolverObs();
  }

  readRoutesUsingSnapshot() {
    // Using Snapshot can lead to "refresh"-issues when using Child Routing and Nested Components

    // Access id param
    let id = this.route.snapshot.params["id"];

    this.vs.getVoucher(id).subscribe((data) => {
      this.voucher = data;
      this.setDetail(this.voucher);
    });

    // Accessing Query Params
    this.readonly = this.route.snapshot.queryParams["readonly"];
    console.log(`Page is readonly: ${this.readonly}`);

    // Accessing Fragments
    this.fragments = this.route.snapshot.fragment;
    if (this.fragments != undefined) {
      console.log(`Section to navigate to: ${this.fragments}`);
    }
  }

  useResolver() {
    this.voucher = this.route.snapshot.data["voucherData"];
    this.setDetail(this.voucher);
  }

  readResolverObs() {
    this.route.data.subscribe((data) => {
      this.voucher = data["voucherData"];
      this.setDetail(this.voucher);
    });
  }

  setDetail(v: Voucher) {
    if (v.Details != null) {
      this.currentDetail = v.Details[0];
    }
  }

  saveVoucher() {}

  selectDetail(detail) {
    this.currentDetail = detail;
  }

  saveDetail(detail) {
    if (this.voucher.Details.includes(detail)) {
    } else {
      this.voucher.Details.push(detail);
    }
  }
}
