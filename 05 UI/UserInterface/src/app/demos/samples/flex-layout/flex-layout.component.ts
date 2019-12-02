import { Component, OnInit } from "@angular/core";
import { Person } from "../person";
import { PersonService } from "../person.service";

@Component({
  selector: "app-flex-layout",
  templateUrl: "./flex-layout.component.html",
  styleUrls: ["./flex-layout.component.scss"]
})
export class FlexLayoutComponent implements OnInit {
  persons: Person[];
  current: Person = <Person>{
    id: 0,
    name: "",
    age: 0,
    gender: "female",
    email: "",
    imgUrl: null
  };

  constructor(private ps: PersonService) {}

  ngOnInit(): void {
    this.ps.getPersons().subscribe(data => {
      this.persons = data;
      if (this.persons.length > 0) {
        this.current = this.persons[0];
      }
    });
  }
}
