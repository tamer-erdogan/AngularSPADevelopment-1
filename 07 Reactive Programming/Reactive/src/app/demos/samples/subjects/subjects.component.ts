import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  constructor() {}

  sub$: Subject<number> = new Subject<number>();
  bs$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  ngOnInit() {
    // this.runSubjectInit();
    this.runBSubjectInit();
  }

  private runSubjectInit() {
    this.sub$.next(5);
    this.sub$.subscribe(val => console.log('Subscriber A', val));
    this.sub$.subscribe(val => console.log('Subscriber B', val));
    this.sub$.next(10);
  }

  private runBSubjectInit() {
    this.bs$.next(0);
    this.bs$.subscribe(val => console.log('BS Subscriber A', val));
    this.bs$.subscribe(val => console.log('BS Subscriber B', val));
    this.bs$.next(10);
  }

  emitNext() {
    this.sub$.subscribe(val => console.log('Late Subscriber', val));
    this.sub$.next(20);
  }

  emitNextBS() {
    this.bs$.subscribe(val => console.log('Late Subscriber', val));
    this.bs$.next(20);
  }
}
