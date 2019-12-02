import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Person } from "./person";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  constructor() {}

  getPersons(): Observable<Person[]> {
    let data = [
      {
        name: "Alexander",
        age: 49,
        gender: "male",
        married: true,
        imgUrl: "/assets/images/alex.jpg"
      },
      { name: "Brunhilde", age: 27, gender: "female", married: false },
      { name: "Susi", age: 37, gender: "female", married: false }
    ];
    return of(data).pipe(delay(2000));
  }
}
