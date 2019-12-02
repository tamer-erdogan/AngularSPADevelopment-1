import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import { Voucher } from "../model";

@Component({
  selector: "app-struct-directives",
  templateUrl: "./struct-directives.component.html",
  styleUrls: ["./struct-directives.component.scss"]
})
export class StructDirectivesComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  persons = [{ name: "Heinz" }, { name: "Brunhilde" }, { name: "Susi" }];
  selectedPerson: string = this.persons[0].name;

  vouchers: Voucher[];

  showDivOne: boolean = true;

  currentDirection: DirectionEnum = DirectionEnum.East;
  direction = DirectionEnum;

  ngOnInit() {
    this.vs.getVouchers().subscribe(
      data => {
        this.vouchers = data;
      },
      err => console.log("err: ", err)
    );
  }

  showVoucher(v: Voucher) {
    console.log(
      `navigating to voucher with text "${v.Text}" - covered later in more detail`
    );
  }
}

export enum DirectionEnum {
  East,
  West,
  North,
  South
}
