import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: ["./binding.component.scss"]
})
export class CSSBindingComponent implements OnInit {
  addClass = true;
  addStyle = true;
  anotherProperty = true;

  constructor() {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      extraClass: this.addClass,
      anotherClass: this.anotherProperty
    };
    return classes;
  }

  setStyles() {
    let styles = {
      "font-style": this.addStyle ? "italic" : "normal",
      "font-weight": this.anotherProperty ? "bold" : "normal"
    };
    return styles;
  }
}

class Person {
  name: string;
  gender: string;
}
