import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener,
  ChangeDetectionStrategy
} from "@angular/core";
import { Movie } from "../movie";

@Component({
  selector: "app-movie-renderer",
  styleUrls: ["./movie-renderer.component.scss"],
  template: `<div class="box" [ngClass]="isPlaying===true ? 'playingItem' : 'upcomingItem'">
              <div class="header">{{item.title}}</div>
              <div class="startTime">Start Time:<br> {{item.startTime | date : "longTime"}}</div>
            </div>`
})
export class MovieRendererComponent implements OnInit {
  @Input() item: Movie;
  @Input() isPlaying: boolean;
  @Output() onHover: EventEmitter<Movie> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.hover(true);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.hover(false);
  }

  hover(overIt: boolean) {
    if (overIt) {
      this.onHover.emit(this.item);
    } else {
      this.onHover.emit(null);
    }
  }
}
