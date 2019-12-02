import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VouchersService } from "./voucher.service";
import { Voucher } from "./model";

@Component({
  selector: "app-vouchers-list",
  templateUrl: "./vouchers-list.component.html",
  styleUrls: ["./vouchers-list.component.css"]
})
export class VouchersListComponent implements OnInit {
  vouchers: Voucher[];

  constructor(private router: Router, private vs: VouchersService) {}

  ngOnInit() {
    this.vs.getVouchers().subscribe(data => (this.vouchers = data));
  }

  showVoucher(id: number) {
    this.router.navigate(["/vouchers/" + id]);
  }
}
