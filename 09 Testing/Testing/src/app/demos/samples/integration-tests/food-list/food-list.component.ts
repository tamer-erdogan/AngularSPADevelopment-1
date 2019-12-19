import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../../model/food-item.model";
import { FoodService } from "../../foodService/food.service";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"]
})
export class FoodListComponent implements OnInit {
  food: FoodItem[] | null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getItems().subscribe(data => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter(i => i != food);
    this.fs.deleteItem(food);
  }
}
