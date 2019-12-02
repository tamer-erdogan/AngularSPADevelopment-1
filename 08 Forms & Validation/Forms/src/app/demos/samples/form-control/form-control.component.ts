import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-control",
  templateUrl: "./form-control.component.html",
  styleUrls: ["./form-control.component.scss"]
})
export class FormControlComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //
    // this.form.valueChanges.subscribe(data => console.log('Form values changed', data));
    // this.form.statusChanges.subscribe(data => console.log('Form status changed', data));
    // this.form.errors.subscribe(data => console.log('Form errors:', data));
  }
}
