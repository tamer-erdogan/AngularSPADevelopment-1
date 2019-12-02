import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Person } from "./person";

@Injectable()
export class PersonService {
  constructor() {}

  data: Person[] = [
    {
      id: 1,
      name: "Alexander",
      age: 49,
      gender: "male",
      married: true,
      imgUrl: "/assets/images/alex.jpg"
    },
    { id: 2, name: "Brunhilde", age: 27, gender: "female", married: false },
    { id: 3, name: "Susi", age: 37, gender: "female", married: false }
  ];

  getPersons(): Observable<Person[]> {
    return of(this.data).pipe(delay(1000));
  }
}
