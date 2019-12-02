import { Component, OnInit } from "@angular/core";
import { Person } from "../persons/person";
import { PersonService } from "../persons/person.service";

@Component({
  selector: "app-repeater",
  templateUrl: "./repeater.component.html",
  styleUrls: ["./repeater.component.scss"]
})
export class RepeaterComponent implements OnInit {
  persons: Person[];

  constructor(private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

  savePersonToDB(p: Person) {
    console.log("saving to db:", p);
  }
}
