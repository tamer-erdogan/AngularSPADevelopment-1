import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-side-panel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"]
})
export class SidePanelComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    // let dialogRef = this.dialog.open(CalculatorComponent, {
    //   width: "40vw",
    //   data: { name: "Customer", amount: this.amount }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("Dialog was close with result: ", result);
    // });
  }
}
