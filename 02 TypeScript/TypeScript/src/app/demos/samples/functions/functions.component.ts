import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-functions",
  templateUrl: "./functions.component.html",
  styleUrls: ["./functions.component.scss"]
})
export class FunctionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  typedFunctions() {
    debugger;

    //C# delegate ... variable that contains a function
    let addFunction = function(x: number, y: number): number {
      return x + y;
    };

    var result = addFunction(10, 20);
    console.log(result);
  }

  functionParameters() {
    debugger;

    //optional param
    function buildName(firstName: string, lastName?: string) {
      if (lastName) return firstName + " " + lastName;
      else return firstName;
    }

    console.log(buildName("Bob"));
    console.log(buildName("Giro", "Galgohead"));

    //default param
    function getAddress(street: string, city: string = "Vienna") {
      return `${street}, ${city}`;
    }

    console.log(getAddress("Neuwaldegger Straße"));
    console.log(getAddress("Seestraße", "Idolsberg"));

    //rest param
    function buildFruitBucket(fruitType: string, ...fruits: string[]): void {
      console.log(
        "The following " + fruitType + " are in the bucket " + fruits.join(", ")
      );
    }

    buildFruitBucket("Beeren", "Himbeeren", "Brombeeren", "Goji Beeren");
  }

  returnValue() {
    function twoReturns(): string | string[] {
      return ["abc", "cde"];
    }

    console.log("result of function with two returns: ", twoReturns());
  }

  arrowFunctions() {
    debugger;

    var rectangleFunction = function(width: number, height: number) {
      return width * height;
    };

    //Implemented as Lambda or "Arrow" Function
    var rectangleFunctionArrow = (width: number, height: number) =>
      height * width;
    let result: number = rectangleFunctionArrow(10, 22);
    console.log(result);
  }

  functionOverloads() {
    debugger;

    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard(x: { suit: string; card: number }[]): number;
    function pickCard(x: number): { suit: string; card: number };
    function pickCard(x: any): any {
      if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
      } else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
      } else {
        return null;
      }
    }

    let myDeck = [
      { suit: "diamonds", card: 2 },
      { suit: "spades", card: 10 },
      { suit: "hearts", card: 4 }
    ];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    let pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
  }

  generatorFunction() {
    debugger;

    function* getColors() {
      //Code to be executed in between
      yield "green";
      //Code to be executed in between
      yield "red";
      //Code to be executed in between
      yield "blue";
    }

    const colorGenerator = getColors();

    debugger;
    console.log(colorGenerator.next());
    console.log(colorGenerator.next());
    console.log(colorGenerator.next());

    //practical usage many time together with for ... of
    const arrColor = [];
    let cols = getColors();

    for (let col of Array.from(cols)) {
      //Array.from casts IterableIterator<string> to Array<string>
      arrColor.push(col);
    }
    console.log(arrColor);
  }
}
