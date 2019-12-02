import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { SubSink } from "subsink";

@Component({
  selector: "app-subsink",
  templateUrl: "./subsink.component.html",
  styleUrls: ["./subsink.component.scss"]
})
export class SubsinkComponent implements OnInit, OnDestroy {
  mouse$: Subscription;
  result: { X: number; Y: number } = { X: 0, Y: 0 };
  sub: SubSink = new SubSink();

  ngOnInit() {
    this.subscribeScreen();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log("Mouse Subscription unsubscribed using Subsink");
  }

  subscribeScreen() {
    let pad = document.querySelector(".signPad");
    let mouse = fromEvent(pad, "mousemove").pipe(
      map((evt: MouseEvent) => {
        return { X: evt.clientX, Y: evt.clientY };
      })
    );

    this.sub.sink = mouse.subscribe(point => {
      this.result = point;
      console.log("Mouse Moved @: ", point);
    });

    // Alternative Syntax
    // this.sub.add(
    //   mouse.subscribe(point => {
    //     this.result = point;
    //     console.log("Mouse Moved @: ", point);
    //   })
    // );
  }
}
