import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Store } from "@ngrx/store";
import {
  DemosState,
  getAllVouchers
} from "../../../store/reducers/demos.reducer";
import { Voucher } from "../../model";

@Component({
  selector: "app-ngrx-vouchers",
  templateUrl: "./ngrx-vouchers.component.html",
  styleUrls: ["./ngrx-vouchers.component.scss"]
})
export class NgrxVouchersComponent implements OnInit {
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ["ID", "Text", "Date", "Amount"];

  constructor(private store: Store<DemosState>) {}

  ngOnInit() {
    this.store.select(getAllVouchers).subscribe(data => {
      console.log("data", data);
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row) {
    console.log("Edit Row", row);
  }
}
