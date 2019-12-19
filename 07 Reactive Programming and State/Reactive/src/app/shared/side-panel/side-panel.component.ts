import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventBusService } from "src/app/demos/samples/evt-bus/event-bus.service";
import { SidebarActions } from "src/app/demos/samples/evt-bus/sidebar-actions";

@Component({
  selector: "app-side-panel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"]
})
export class SidePanelComponent implements OnInit {
  constructor(private eb: EventBusService) {}

  editorDisplayed: boolean;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleEditor() {
    console.log(
      "Switching Markdown Editor to Display: ",
      !this.editorDisplayed
    );
    if (this.editorDisplayed) {
      this.eb.triggerCmd(SidebarActions.HIDE_MARKDOWN);
    } else {
      this.eb.triggerCmd(SidebarActions.SHOW_MARKDOWN);
    }
    this.editorDisplayed = !this.editorDisplayed;
  }
}
