import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Voucher } from "../../model";
import { VouchersService } from "../../voucher.service";
import { DataStoreService } from "../data-store-service";

@Component({
  selector: "app-vouchers-list",
  templateUrl: "./vouchers-list.component.html",
  styleUrls: ["./vouchers-list.component.scss"]
})
export class VouchersListComponent implements OnInit {
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ["ID", "Text", "Date", "Amount", "Delete", "Edit"];

  constructor(
    private vs: VouchersService,
    private router: Router,
    private state: DataStoreService
  ) {}

  ngOnInit() {
    this.initVouchers();
  }

  private initVouchers() {
    this.state.getAllVouchers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(v: Voucher) {
    console.log("Edit Row", v);
  }

  deleteVoucher(id: number) {
    this.vs.deleteVoucher(id);
    this.initVouchers();
  }
}
