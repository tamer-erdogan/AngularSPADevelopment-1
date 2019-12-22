import { FoodService } from "./food.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { FoodItem } from "../model/food-item.model";

describe("FoodService", () => {
  let service: FoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService]
    });

    service = TestBed.get(FoodService);
  });

  it("should create food in an array", done => {
    const item: FoodItem = { name: "Gulasch", rating: 2 };
    service.addItem(item);
    service.getItems().subscribe(data => {
      expect(data.length).toEqual(1);
      done();
    });
  });

  it("should return the correct amount of items", done => {
    const g: FoodItem = { name: "Gulasch", rating: 2 };
    service.addItem(g);
    const f: FoodItem = { name: "Panierter Kabeljau", rating: 3 };
    service.addItem(f);
    service.getItems().subscribe(data => {
      expect(data.length).toEqual(2);
      done();
    });
  });

  it("should have the correct nbr of items after delete", done => {
    const g: FoodItem = { name: "Gulasch", rating: 2 };
    service.addItem(g);
    const f: FoodItem = { name: "Panierter Kabeljau", rating: 3 };
    service.addItem(f);
    service.deleteItem(g);

    service.getItems().subscribe(data => {
      expect(data.length).toEqual(1);
      done();
    });

    service.getItems().subscribe(data => {
      expect(data).toEqual([{ name: "Panierter Kabeljau", rating: 3 }]);
      done();
    });
  });
});
