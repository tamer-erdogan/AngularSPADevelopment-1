import { Component, OnInit } from '@angular/core';
import { Person, WorkLifeBalance } from '../person.model';
import { PersonService } from '../person.service';
import { emptyPerson, wealthOpts } from '../empty-person';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  person: Person = emptyPerson;
  wealthOpts = wealthOpts;

  constructor(private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
