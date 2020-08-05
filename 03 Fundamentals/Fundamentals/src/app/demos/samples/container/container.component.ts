import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private ps: PersonService) {}

  persons: Person[];
  current: Person;

  ngOnInit() {
    this.ps.getPersons().subscribe((data) => {
      this.persons = data;
    });
  }

  onPersonSelected(p: Person) {
    // this.current = p;
    this.current = { ...p };
    // this.current = Object.assign({},p)
  }

  onPersonSaved(p: Person) {
    console.log('saving to service:', p);
    let existing: Person = this.persons.find((i) => i.id == p.id);
    if (existing != null) {
      Object.assign(existing, p);
    } else {
      this.persons.push(p);
    }
    console.log('Persons array after save', this.persons);
  }
}
