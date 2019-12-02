import { Component, OnInit } from "@angular/core";
import { Calculator, constKey, myFunction } from "./currency.functions";
import { MathFunctions } from "./math.functions";

@Component({
  selector: "app-modules",
  templateUrl: "./modules.component.html",
  styleUrls: ["./modules.component.scss"]
})
export class ModulesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  useModule() {
    var sqr = MathFunctions.square(3);
    console.log("3 square is " + sqr);

    var calc = new Calculator();
    calc.add(1, 3);
  }

  useLocalStorage() {
    localStorage.setItem(constKey, "the value");

    var val = localStorage.getItem(constKey);
  }
}
