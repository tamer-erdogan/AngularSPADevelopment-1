import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import { Voucher } from "../model";

@Component({
  selector: "app-using-streams",
  templateUrl: "./using-streams.component.html",
  styleUrls: ["./using-streams.component.scss"]
})
export class UsingStreamsComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  //Classic Begginer Pattern
  vouchers: Voucher[];

  //Declarative Stream Pattern
  vouchers$ = this.vs.getVouchers();

  ngOnInit() {
    this.getDataClassic();
  }

  getDataClassic() {
    this.vs.getVouchers().subscribe(data => {
      this.vouchers = data;
    });
  }
}
