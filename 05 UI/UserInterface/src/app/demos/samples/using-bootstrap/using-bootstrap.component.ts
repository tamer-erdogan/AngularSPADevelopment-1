import { Component, OnInit } from "@angular/core";
import { Voucher } from "../model";
import { VouchersService } from "../voucher.service";

@Component({
  selector: "app-using-bootstrap",
  templateUrl: "./using-bootstrap.component.html",
  styleUrls: ["./using-bootstrap.component.scss"]
})
export class UsingBootstrapComponent implements OnInit {
  vouchers: Voucher[];
  constructor(private vs: VouchersService) {}

  ngOnInit() {
    this.vs.getVouchers().subscribe(data => (this.vouchers = data));
  }

  showVoucher(id: number) {}
}
