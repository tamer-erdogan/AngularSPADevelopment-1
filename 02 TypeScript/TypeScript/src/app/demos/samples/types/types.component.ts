import { Component, OnInit } from '@angular/core'; // ES 6 module import
import * as $ from 'jquery'; // Non ES6 Moduel import
import * as moment from 'moment'; // Non ES6 Moduel import
import { Voucher } from '../model';
import './date-extensions';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  basicVariables() {
    debugger;

    const myname = 'alex';

    // Numbers
    const age = 50;
    const weight = 83.12;
    const dogWeight = 25.4;
    // dogWeight = "heavy";
    const rand = Math.random();

    const numbers: number[] = [];
    const myNumArray: Array<number> = new Array();

    numbers[0] = 1;
    // numbers.push("two"); // compile-time error

    let notSure: any = 4;
    notSure = 'maybe a string instead';
    notSure = false; // okay, definitely a boolean

    const isCustomer = false;
    const finished = false;

    // strings
    const dogName = 'Giro';
    const otherDogName = 'Soi';
    const myString = 'ten';

    const strings: Array<string> = ['hubert', 'Sam'];
    strings.push('Hans');
    // strings[1] = 1337; // compile time error

    // Function returning never must have unreachable end point
    function error(message: string): never {
      throw new Error(message);
    }

    // Not much else we can assign to these variables!
    let u: undefined;
    const n: null = null;
  }

  useLetConst() {
    debugger;

    const index = 0;
    const array = ['a', 'b', 'c'];
    for (let index = 0; index < array.length; index++) {
      console.log('Inside for ...' + index);
      console.log('Inside for ...' + array[index]);
    }
    console.log(index); // 0
    const pi = 3.14;
    // pi = 2;

    const person = { name: 'john', age: 22 };
    person.name = 'franz';

    // leveling up
    // const result = x + 'xyz';
    // var letresult = p + "xyz";

    const p = 'abc';
    const x = 'fgh';
  }

  stringFunctions() {
    debugger;

    const productID = 100;
    const category = 'music';

    // string concatenation
    const url = 'http://server/' + category + '/' + productID;
    console.log(url);

    // Template Literals using Backticks
    const tl = `http://server/${category}/${productID}`;

    console.log(tl);

    // startswith
    const str = 'To be, or not to be, that is the question.';
    console.log(str.startsWith('To be')); // true
    console.log(str.endsWith('question.')); // true

    // include -> C# string.contains
    function countString(ts) {
      const characters = ['a', 'b', 'c'];

      let ct = 0;
      for (const char of ts) {
        if (characters.includes(char)) {
          ct++;
        }
      }
      return ct;
    }

    console.log(`chars included in your string: ${countString('abheben')}`);
  }

  useVoidAny() {
    debugger;

    function handleClick(): void {
      const g = "I don't return anything.";
      console.log(g);
      // return g;
    }

    const likeadelegate: void = handleClick();
    // execute it
    likeadelegate;
  }

  useEnums() {
    debugger;

    enum Happyness {
      happy = 2,
      unhappy = 4,
      ok = 6,
    }

    const isHappy: Happyness = Happyness.happy;

    enum Sex {
      male = 'm',
      female = 'f',
      undefined = 'u',
    }

    enum VoucherStatus {
      draft,
      complete,
      pending,
    }

    let status: VoucherStatus;
    status = VoucherStatus.draft;
    status = VoucherStatus.complete;
    // status = VoucherStatus.unfinished; // compile-time error
    // status = "on the way"; // compile-time error

    if (status === VoucherStatus.complete) {
    }

    function handleVoucher(v: Voucher, status: VoucherStatus) {
      switch (status) {
        case VoucherStatus.complete:
          console.log(`got voucher ${v}: will pay`);
          break;
        case VoucherStatus.draft:
          console.log(`got voucher ${v}: will save to O365`);
          break;
        case VoucherStatus.pending:
          console.log(`got voucher ${v}: will call the accountant`);
          break;
        default:
          console.log('...');
          break;
      }
    }

    const newVoucher = new Voucher();

    const v: Voucher = {
      ID: 1,
      Text: 'Media Markt',
      Amount: 22,
      Date: new Date(),
    } as Voucher;

    handleVoucher(v, status);
  }

  useTypings() {
    // using moment
    const dt = new Date(1990, 3, 2);
    console.log('Using time format: ', moment(dt).format('LTS'));

    // using jQuery
    const myArray = ['Angular', 'React', 'SPFx'];
    console.log('myArray is an Array: ', $.isArray(myArray));
  }

  usePrototypes() {
    const dt = new Date();
    const weekLater = dt.addDays(7);
    console.log(`${dt} is one week before ${weekLater}`);
  }

  introArrays() {
    debugger;

    // declaration using type followed by []
    const customers: string[] = ['Alex', 'Giro', 'Sonja', 'Soi', 'David'];
    // declaration using generic array type
    const nbrs: Array<number> = [3, 4, 5];

    console.log(customers.length + 'Persons in Array');
    customers[2] = 'Brunhilde';
    console.log('Person with index 1 is' + customers[1]);

    // for ... of
    const list: number[] = [4, 5, 6];

    for (const i in list) {
      console.log(i); // "0", "1", "2", -> for ... in loop returns index
    }

    for (const i of list) {
      console.log(i); // "4", "5", "6"  -> for ... of loop returns element
    }

    // array destructuring
    const arrNbr = [8, 4, 100, -5, 20];
    const [first, second, third] = arrNbr;
    console.log(third, second, first); // output: 100, 4, 8
  }

  arrayHelpers() {
    debugger;

    class Fruit {
      name: string;
      quantity: number;
      price: number;
      region: string;
    }

    const fruits: Fruit[] = [
      { name: 'apples', quantity: 2, price: 3, region: 'europe' },
      { name: 'bananas', quantity: 0, price: 5, region: 'caribean' },
      { name: 'cherries', quantity: 5, price: 8, region: 'europe' },
    ]; // -> Json Objects from REST call

    // forEach
    fruits.forEach(function (fruit) {
      fruit.quantity++;
    });

    fruits.forEach((item: Fruit) => {
      item.quantity++;
    });

    fruits.forEach((item) => item.quantity++);

    // find -> returns first item
    const cherry = fruits.find(function (fruit) {
      return fruit.name === 'cherries';
    });

    console.log(cherry);

    // filter -> returns array
    const cheap = fruits.filter(function (item) {
      return item.price < 6;
    });
    console.log(cheap);

    // map -> shape arr
    const names = fruits.map(function (item) {
      return item.name;
    });

    const lables = fruits.map(function (item) {
      return {
        label: `${item.name} costs ${item.price}`,
        stockInEuro: item.quantity * item.price,
      };
    });

    // reduce:  You want to find a cumulative or concatenated value based on elements across the array
    // array.reduce(callback[, initialValue]);
    class RocketLaunch {
      country: string;
      launches: number;
    }

    const rockets: RocketLaunch[] = [
      { country: 'Russia', launches: 32 },
      { country: 'US', launches: 23 },
      { country: 'China', launches: 16 },
      { country: 'Europe(ESA)', launches: 7 },
      { country: 'India', launches: 4 },
      { country: 'Japan', launches: 3 },
    ];

    let launches = rockets.reduce(function (agg, item) {
      return agg + item.launches;
    }, 0);

    launches = rockets.reduce(
      (agg: number, item: RocketLaunch) => agg + item.launches,
      0
    ); // same as above

    console.log('launches so far: ', launches);

    const food = [
      { id: 1, name: 'Butter Chicken', price: 9, calories: 1200 },
      { id: 2, name: 'Curry Wurst', price: 2.7, calories: 730 },
      { id: 3, name: 'Blini with Salmon', price: 8.3, calories: 600 },
    ];

    const nextId =
      food.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1;

    console.log('next id would be ' + nextId);

    // splice -> manipulate arrays

    const dogs = ['whippet', 'galgo espanol', 'magyar whistler', 'magyar agar'];
    dogs.splice(2, 0, 'chart polski');
    console.log(dogs); // ["whippet", "galgo espanol", "chart polski", "magyar whistler", "magyar agar"]
    dogs.splice(3, 1);
    console.log(dogs); // ["whippet", "galgo espanol", "chart polski", "magyar agar"]

    // flatmap
    const orders = [
      {
        orderId: 1,
        items: [
          { name: 'abc', price: 2.22 },
          { name: 'ded', price: 4.22 },
        ],
      },
      {
        orderId: 2,
        items: [
          { name: 'asdfbc', price: 6.22 },
          { name: 'sdf', price: 8.22 },
        ],
      },
    ];

    const items = orders.flatMap((o) => o.items.map((i) => i.name));
  }

  chainingArrayHelpers() {
    interface Dog {
      name: string;
      age: number;
      breed: string;
    }

    const dogs: Dog[] = [
      {
        name: 'Cleo',
        age: 17,
        breed: 'Whippet',
      },
      {
        name: 'Giro',
        age: 9,
        breed: 'Galgo Espanol',
      },
      {
        name: 'Flora',
        age: 7,
        breed: 'Italian Sighthound',
      },
      {
        name: 'Soi',
        age: 5,
        breed: 'Whippet',
      },
    ];

    // Tasks:
    // Select only whippets
    // Translate into dog years
    // Sum result

    // typical ECMA Script 5 pattern
    function getAges(doggies) {
      let sum = 0;
      for (let i = 0; i < doggies.length; i++) {
        if (doggies[i].breed === 'Whippet') {
          const tempAge = doggies[i].age;
          sum += tempAge * 7;
        }
      }
      return sum;
    }
    console.log('Ages using for loop: ', getAges(dogs));

    // functional approach

    const whippets = dogs.filter((dog) => {
      return dog.breed === 'Whippet';
    });

    const adjustAge = dogs.map((dog) => dog.age * 7);

    const calSum = dogs.reduce((sum, animal) => {
      return sum + animal.age;
    }, 0);

    const sumFunctional = whippets
      .map((dog) => dog.age * 7)
      .reduce((sum, animal_age) => {
        return sum + animal_age;
      });

    console.log('Ages using functional approach: ', getAges(dogs));
  }

  restParams() {
    debugger;

    function playLotto(name: string, ...bets: number[]) {
      console.log(`${name} is playing the following lottery numbers: `);
      bets.forEach((nbr: number) => console.log(nbr));
    }

    playLotto('Hannes', 3, 12, 45, 48);
    playLotto('Hugo', 3, 12, 45, 48, 55, 22);
  }

  spreadOperator() {
    console.log(Math.max(3, 5, 1)); // 5

    const arr = [3, 5, 1];
    // console.log( Math.max(arr) ); // NaN
    console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

    const arr1 = [1, -2, 3, 90];
    const arr2 = [8, 3, -8, 1];

    console.log('Maximum is', Math.max(1, ...arr1, 2, ...arr2, 25)); // 90

    // Sample from Above

    function playLotto(name: string, ...bets: number[]) {
      console.log(`${name} is playing the following lottery numbers: `);
      bets.forEach((nbr: number) => console.log(nbr));
    }

    playLotto('Hannes', 3, 12, 45, 48);

    const numbers = [3, 12, 45, 48];

    // calling a function with ...rest param using ...spread
    playLotto('Hannes', ...numbers);
  }

  // -> C# Dictionary
  maps() {
    debugger;

    const myMap = new Map<string, any>();
    const myString = 'a string';
    const voucher = { Id: 33, Text: 'Diesel', Amount: 56 };
    const logFunction = function (param) {
      console.log(`logFuntion is logging: ${param}`);
    };

    // consts are sometimes easier to use
    const keyObject = 'keyObject';
    const keyFunct = 'keyFunct';

    // setting the values
    myMap.set('keyString', myString);
    myMap.set(keyObject, voucher);
    myMap.set(keyFunct, logFunction);

    console.log('Map size: ' + myMap.size); // 3

    // getting the values
    const strResult = myMap.get('keyString'); // "value associated with 'a string'"
    myMap.get(keyObject); // "value associated with 'a string'" because keyString === 'a string'
    myMap.get(keyFunct)('test'); // "value associated with keyObj"

    myMap.delete('keyString');
    myMap.clear();
  }

  // -> Indexed Array
  sets() {
    // debugger;

    const mySet = new Set<any>();
    mySet.add(1);
    mySet.add('some text');
    const o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(Math.sqrt(25)); // true
    mySet.has('Some Text'.toLowerCase()); // true
    mySet.has(o); // true
    const size = mySet.size; // 4

    console.log(`acessing using: mySet[0] gives: `, mySet[0]);

    mySet.forEach((item) => console.log(`item in set: ${item}`));

    mySet.delete(5); // removes 5 from set

    // iterate set

    const log = (caller, sum) => console.log(`${caller} returned ${sum}`);

    const setNbrs: Set<number> = new Set<number>([2, 4, 88]);

    const sum = Array.from(setNbrs).reduce(function (a, b) {
      return a + b;
    }, 100);

    log('Sum with initail of 100', sum);

    const totalArrow = Array.from(setNbrs).reduce((a, b) => a + b);

    log('totalArrow', totalArrow);

    log(
      'totalArrow 2',
      Array.from(setNbrs).reduce((a, b) => a + b)
    );
  }

  usePipeline() {
    const double = (n) => n * 2;
    const increment = (n) => n + 1;

    // without pipeline operator
    double(increment(double(double(5)))); // 42
  }
}
