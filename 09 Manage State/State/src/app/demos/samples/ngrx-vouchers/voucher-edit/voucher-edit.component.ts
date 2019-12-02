import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { DemosState } from "src/app/demos/store/reducers/demos.reducer";
import { AddVoucherAction } from "src/app/demos/store/actions/demos.actions";

@Component({
  selector: "app-voucher-edit",
  templateUrl: "./voucher-edit.component.html",
  styleUrls: ["./voucher-edit.component.scss"]
})
export class VoucherEditComponent implements OnInit {
  constructor(private store: Store<DemosState>) {}

  ngOnInit() {}

  addVoucher() {
    this.store.dispatch(
      new AddVoucherAction({
        ID: 9,
        Text: "iPhone 11 Pro",
        Date: "2019-11-05T10:50:04.1215883",
        Amount: 100,
        Paid: true,
        Expense: true
      })
    );
  }
}
