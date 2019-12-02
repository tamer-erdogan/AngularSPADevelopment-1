import { Component, OnInit } from "@angular/core";
import { EmbedVideoService } from "ngx-embed-video";
@Component({
  selector: "app-why-observables",
  templateUrl: "./why-observables.component.html",
  styleUrls: ["./why-observables.component.scss"]
})
export class WhyObservablesComponent implements OnInit {
  constructor(private embedService: EmbedVideoService) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl, {
      attr: { width: 800, height: 450 }
    });
  }

  youtubeUrl = "https://www.youtube.com/watch?v=FjsJpPAhRIc";
  yt_iframe_html: any;

  ngOnInit() {}
}
