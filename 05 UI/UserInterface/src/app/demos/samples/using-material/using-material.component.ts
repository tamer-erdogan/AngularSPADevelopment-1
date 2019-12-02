import { Component, OnInit } from "@angular/core";
import { SnackbarService } from "src/app/shared/snackbar/snackbar.service";

@Component({
  selector: "app-using-material",
  templateUrl: "./using-material.component.html",
  styleUrls: ["./using-material.component.scss"]
})
export class UsingMaterialComponent implements OnInit {
  card = "/assets/images/CleoSoi.jpg";
  count = 3;
  public images = ["giraffe", "monkey", "elefant"];

  constructor(private sns: SnackbarService) {}

  ngOnInit() {}

  incrementCt() {
    this.count = this.count + 1;
  }

  onLike() {
    this.sns.displayAlert("Great", "Thank you for liking ...");
  }
}
