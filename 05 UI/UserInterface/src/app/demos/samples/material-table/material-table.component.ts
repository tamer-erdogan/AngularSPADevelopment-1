import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Voucher } from '../model';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['Text', 'Date', 'Amount', 'action'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Voucher[]>('./assets/vouchers.json').subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row) {
    console.log('Edit Row', row);
  }
}
