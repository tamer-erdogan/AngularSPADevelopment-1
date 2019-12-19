import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  title: string = environment.title;
}
