import { Component, OnInit } from "@angular/core";
import { Voucher } from "../../model";
import { DataStoreService } from "../data-store-service";
import { scan, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-kpi-bar",
  templateUrl: "./kpi-bar.component.html",
  styleUrls: ["./kpi-bar.component.scss"]
})
export class KpiBarComponent implements OnInit {
  runningSum$: Observable<number>;

  constructor(private dataStore: DataStoreService) {}

  ngOnInit() {
    this.runningSum$ = this.dataStore
      .getAllVouchers()
      .pipe(map(vs => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));

    // JS Code
    // this.dataStore.getAllVouchers().subscribe((vouchers: Voucher[]) => {
    //   this.runningSum = 0;
    //   vouchers.forEach(item => {
    //     if (this.log) {
    //       console.log(
    //         `Adding ${item.Amount}€ from voucher with text '${
    //           item.Text
    //         }' to current Total ${this.runningSum} - New Total: ${item.Amount +
    //           this.runningSum}`
    //       );
    //     }
    //     this.runningSum += item.Amount;
    //   });
    // });
  }
}
