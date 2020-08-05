import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        By using backticks I can use mulitline text
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./inline.component.scss'],
})
export class InlineComponent implements OnInit {
  title = 'I am defining my html inline by using template metadata';

  constructor() {}

  ngOnInit() {}
}
