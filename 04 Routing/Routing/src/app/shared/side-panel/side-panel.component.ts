import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-panel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"]
})
export class SidePanelComponent implements OnInit {
  constructor(private router: Router) {}

  editorDisplayed: boolean;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    if (this.editorDisplayed) {
      this.router.navigate(["", { outlets: { sidebarOutlet: "showeditor" } }]);
    } else {
      this.router.navigate(["", { outlets: { sidebarOutlet: null } }]);
    }
  }

  showUpload() {
    this.router.navigate(["", { outlets: { sidebarOutlet: "showuploader" } }]);
  }
}
