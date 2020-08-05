import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  constructor() {}

  @Input() persons: Person[];
  @Output() personSelected: EventEmitter<Person> = new EventEmitter();

  ngOnInit() {}

  selectPerson(p: Person) {
    this.personSelected.emit(p);
  }
}
