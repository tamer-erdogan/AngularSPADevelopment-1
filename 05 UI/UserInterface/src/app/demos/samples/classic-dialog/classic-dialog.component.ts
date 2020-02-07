import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CalculatorComponent } from "../calculator/calculator.component";
import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: "app-classic-dialog",
  templateUrl: "./classic-dialog.component.html",
  styleUrls: ["./classic-dialog.component.scss"]
})
export class ClassicDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  param: string = "Giro";

  ngOnInit() {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: "40vw",
      data: { name: this.param }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
