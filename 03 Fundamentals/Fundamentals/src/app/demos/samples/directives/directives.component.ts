import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  msg = 'Change my color';
  bgcolor = 'blue';
  cssclass = 'big';
  isDisabled = true;
  isHidden = false;

  constructor() {}

  ngOnInit() {}

  changeColor() {
    this.bgcolor = this.bgcolor == 'blue' ? 'red' : 'blue';
  }

  changeClass() {
    this.cssclass = this.cssclass === 'big' ? 'small' : 'big';
  }

  getClass() {
    return 'my-' + this.cssclass;
  }

  toggleInput() {
    this.isDisabled = !this.isDisabled;
  }

  hideInput() {
    this.isHidden = !this.isHidden;
  }
}
