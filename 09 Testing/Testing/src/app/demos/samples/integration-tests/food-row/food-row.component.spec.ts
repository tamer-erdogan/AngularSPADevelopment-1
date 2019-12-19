import { FoodRowComponent } from "./food-row.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RatingPipe } from "../../pipe/rating.pipe";
import { By } from "@angular/platform-browser";

describe("Food Row Integration Test", () => {
  let fixture: ComponentFixture<FoodRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRowComponent, RatingPipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FoodRowComponent);
  });

  it("should have the correct food item", () => {
    fixture.componentInstance.food = { name: "Pad Thai", rating: 5 };
    expect(fixture.componentInstance.food.name).toEqual("Pad Thai");
  });

  it("should render the food name", () => {
    fixture.componentInstance.food = { name: "Pad Thai", rating: 5 };
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector("#itemName").textContent
    ).toContain("Pad Thai");

    expect(
      fixture.debugElement.query(By.css("#itemName")).nativeElement.textContent
    ).toContain("Pad Thai");
  });
});
