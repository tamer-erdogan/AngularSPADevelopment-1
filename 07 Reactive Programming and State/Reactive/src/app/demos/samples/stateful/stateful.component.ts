import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { StatefulVoucherService } from "./stateful-voucher.service";
import { Voucher } from "../model";

@Component({
  selector: "app-stateful",
  templateUrl: "./stateful.component.html",
  styleUrls: ["./stateful.component.scss"],
  providers: [StatefulVoucherService]
})
export class StatefulComponent implements OnInit {
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ["ID", "Text", "Date", "Amount"];

  constructor(private vs: StatefulVoucherService) {}

  ngOnInit() {
    this.vs.getAllVouchers().subscribe(data => {
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
