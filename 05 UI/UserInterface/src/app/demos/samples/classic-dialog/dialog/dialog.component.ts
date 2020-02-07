import { Component, OnInit, Inject } from "@angular/core";
import { ClassicDialogComponent } from "../classic-dialog.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ClassicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  ngOnInit() {}
}
