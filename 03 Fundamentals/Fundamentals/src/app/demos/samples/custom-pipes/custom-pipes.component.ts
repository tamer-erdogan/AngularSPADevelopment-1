import { Component, OnInit } from "@angular/core";
import { Voucher } from "../model";
import { VouchersService } from "../voucher.service";

@Component({
  selector: "app-custom-pipes",
  templateUrl: "./custom-pipes.component.html",
  styleUrls: ["./custom-pipes.component.css"]
})
export class CustomPipesComponent implements OnInit {
  isChecked: boolean = false;
  price: number = 12.33;
  vouchers: Voucher[];

  currentFilter: string;

  constructor(private vs: VouchersService) {}

  ngOnInit() {
    this.vs.getVouchers().subscribe(data => (this.vouchers = data));
  }

  showVoucher(id: number) {
    console.log(
      `navigating to voucher with id ${id} - covered later in more detail`
    );
  }
}
