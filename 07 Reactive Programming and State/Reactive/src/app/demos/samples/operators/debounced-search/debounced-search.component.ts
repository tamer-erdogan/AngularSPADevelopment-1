import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

@Component({
  selector: "app-debounced-search",
  templateUrl: "./debounced-search.component.html",
  styleUrls: ["./debounced-search.component.scss"]
})
export class DebouncedSearchComponent implements OnInit {
  constructor() {}

  @ViewChild("searchBox", { static: false }) searchBox: ElementRef;
  searchterm: string = "";

  ngOnInit() {}

  ngAfterViewInit() {
    this.attachDebouncedSearch();
  }

  private attachDebouncedSearch() {
    fromEvent(this.searchBox.nativeElement, "keyup")
      .pipe(
        debounceTime(750),
        map((kEvt: KeyboardEvent) => {
          return (<HTMLInputElement>kEvt.srcElement).value;
        })
      )
      .subscribe(val => {
        console.log("Currently your searching debounced for:", val);
      });
  }
}
