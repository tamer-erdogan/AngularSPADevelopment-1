import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.scss'],
})
export class ExpressionsComponent implements OnInit {
  constructor() {}

  title = 'Expressions & Interpolation';
  nbr = 10;

  ngOnInit() {}
}
