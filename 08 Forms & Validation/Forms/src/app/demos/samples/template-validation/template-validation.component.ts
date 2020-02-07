import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Person, WorkLifeBalance } from "../person";
import { PersonService } from "../person.service";
import { emptyPerson } from "../empty-person";

@Component({
  selector: "app-template-validation",
  templateUrl: "./template-validation.component.html",
  styleUrls: ["./template-validation.component.scss"]
})
export class TemplateValidationComponent implements OnInit {
  @ViewChild("personForm") form: NgForm;

  person: Person = emptyPerson;

  constructor(private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPerson().subscribe(p => {
      this.person = p;
    });
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
