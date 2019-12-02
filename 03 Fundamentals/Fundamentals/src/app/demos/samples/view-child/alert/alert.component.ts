import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-alert",
  template: `
    <div (click)="alert()">{{ type }}</div>
  `,
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent {
  @Input()
  type: string = "success";

  alert() {
    console.log("you clicked an alert component");
  }
}
