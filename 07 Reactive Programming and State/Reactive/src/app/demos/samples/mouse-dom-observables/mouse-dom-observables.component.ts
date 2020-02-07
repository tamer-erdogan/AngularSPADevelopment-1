import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { map,switchMap,takeUntil,pairwise } from "rxjs/operators";

@Component({
  selector: "app-mouse-dom-observables",
  templateUrl: "./mouse-dom-observables.component.html",
  styleUrls: ["./mouse-dom-observables.component.scss"]
})
export class MouseDomObservablesComponent {
  @ViewChild("signPad") signPad: ElementRef;
  @ViewChild("searchBox") searchBox: ElementRef;

  result: { X: number; Y: number } = { X: -1, Y: -1 };

  private cx: CanvasRenderingContext2D;
  private mouseSubscription : Subscription

  ngAfterViewInit() {
    this.subscribeSearchBox();
  }

  subscribeMouse() {
    this.captureEvents();
  }

  unsubscribeMouseEvt() {
    this.mouseSubscription.unsubscribe()
  }

  private captureEvents() {
    const canvasEl: HTMLCanvasElement = this.signPad.nativeElement;
    const rect = canvasEl.getBoundingClientRect();
    
    // set the internal canvas to the corect aspect ratio of the element
    this.cx = canvasEl.getContext('2d');
    this.cx.canvas.width=rect.width
    this.cx.canvas.height=rect.height
    this.cx.lineWidth = 2;
    this.cx.lineCap = 'round';
    
    // this will capture all mousedown events from the canvas element
    
    let mouse$ = fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              // stop once the user releases the mouse
              // this will trigger a 'mouseup' event    
              
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // stop once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),

              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      )

    this.mouseSubscription = mouse$
      .subscribe(
        (res:[MouseEvent,MouseEvent]) => {
          const rect = this.signPad.nativeElement.getBoundingClientRect();
          
          // previous and current position with the offset
          const prevPos = {
            x: res[0].clientX - rect.left,
            y: res[0].clientY - rect.top
          };
    
          const currentPos = {
            x: res[1].clientX - rect.left,
            y: res[1].clientY - rect.top
          };
    
          // do the actual drawing
          this.drawOnCanvas(prevPos, currentPos);
        }
      )
  }

  private drawOnCanvas(prevPos: { x: number, y: number },currentPos: { x: number, y: number }) {
    if (!this.cx) { return; }

    // this.cx.beginPath();

    //if (prevPos)  {
    if(Math.abs(prevPos.x-currentPos.x)>0 || Math.abs(prevPos.y-currentPos.y)>0)
      this.cx.beginPath()
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
      this.cx.closePath()
    //}
    this.result.X = currentPos.x;
    this.result.Y = currentPos.y;
  }

  subscribeSearchBox() {
    fromEvent(this.searchBox.nativeElement, "keyup").subscribe(
      (ke: KeyboardEvent) => {
        console.log("Event received from Keyboard:", ke);
      }
    );
  }
}
