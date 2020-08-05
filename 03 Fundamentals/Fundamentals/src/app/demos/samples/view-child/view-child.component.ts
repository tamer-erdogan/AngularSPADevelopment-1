import {
  Component,
  ViewChildren,
  AfterViewInit,
  ViewChild,
  ElementRef,
  QueryList,
  Renderer2,
  AfterViewChecked,
} from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('title', { static: true }) title: ElementRef;
  @ViewChild('parentEl', { static: true }) parentEl: ElementRef;
  @ViewChildren('div') divsList: QueryList<ElementRef>;
  @ViewChildren(AlertComponent) alertComps: QueryList<AlertComponent>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    console.log('title:', this.title.nativeElement);
    this.doFlex();
    this.alertComps.forEach((item) =>
      console.log('Found AlertComponent: ', item)
    );
  }

  ngAfterViewChecked() {
    this.doFlex();
  }

  doFlex() {
    const finalWith = this.calcWidth(this.parentEl, 350);

    this.divsList.forEach((div) => {
      div.nativeElement.style.height = '4rem';
      div.nativeElement.style.width = finalWith + 'px';
      this.renderer.setStyle(div.nativeElement, 'color', 'blue');
    });

    this.renderer.setStyle(
      this.divsList.last.nativeElement,
      'background-color',
      'green'
    );
  }

  calcWidth(el: ElementRef<any>, minWidth: number, margins = 20): number {
    const pw = el.nativeElement.clientWidth;
    const elsPerRow = Math.floor(pw / minWidth);
    if (elsPerRow > el.nativeElement.childElementCount) {
      return pw / el.nativeElement.childElementCount - margins;
    }

    const cellwidth = pw / elsPerRow;
    const finalWith =
      elsPerRow * minWidth < pw
        ? pw / elsPerRow - margins
        : cellwidth - margins;
    return finalWith;
  }

  setTitle() {
    const el: HTMLElement = this.title.nativeElement;
    el.innerHTML = '<b>Roses are red</b>';
  }
}
