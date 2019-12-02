import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FoodItem } from "src/app/shared/foodItem";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"]
})
export class FoodListComponent implements OnInit {
  constructor() {}

  @Input()
  food: FoodItem[];
  @Output()
  foodSelected: EventEmitter<FoodItem> = new EventEmitter();

  ngOnInit() {}

  selectFood(p: FoodItem) {
    this.foodSelected.emit(p);
  }
}
