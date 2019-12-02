import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
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

  //Stream Pattern
  vouchers$: Observable<Voucher[]>;

  ngOnInit() {
    this.getDataClassic();
    this.getDataStream();
  }

  getDataClassic() {
    this.vs.getVouchers().subscribe(data => {
      this.vouchers = data;
    });
  }

  getDataStream() {
    this.vouchers$ = this.vs.getVouchers();
  }
}
