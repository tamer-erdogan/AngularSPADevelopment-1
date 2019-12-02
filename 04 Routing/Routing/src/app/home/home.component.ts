import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {}

  title: string = environment.title;

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
