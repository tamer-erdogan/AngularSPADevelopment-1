import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { emptyPerson, wealthOpts } from '../empty-person';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private ps: PersonService) {}

  person: Person = emptyPerson;
  wealthOpts = wealthOpts;

  personForm: FormGroup;

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.setValue(p);
    });

    this.personForm = new FormGroup({
      name: new FormControl(this.person.name),
      age: new FormControl(this.person.age),
      email: new FormControl(this.person.email),
      gender: new FormControl(this.person.gender),
      wealth: new FormControl(this.person.wealth),
    });
  }

  savePerson(personForm): void {
    this.ps.save(personForm);
  }
}
