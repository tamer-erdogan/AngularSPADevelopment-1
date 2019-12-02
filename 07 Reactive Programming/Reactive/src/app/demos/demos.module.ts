import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EmbedVideo } from "ngx-embed-video";
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { DemoService } from "./demo.service";
import { CreatingObservableComponent } from "./samples/creating-observables/creating-observable.component";
import { FlexLayoutApiComponent } from "./samples/flex-layout-api/flex-layout-api.component";
import { MouseDomObservablesComponent } from "./samples/mouse-dom-observables/mouse-dom-observables.component";
import { MovieRendererComponent } from "./samples/movie-renderer/movie-renderer.component";
import { MovieService } from "./samples/movie.service";
import { ObservableCrudComponent } from "./samples/observable-crud/observable-crud.component";
import { DebouncedSearchComponent } from "./samples/operators/debounced-search/debounced-search.component";
import { OperatorsComponent } from "./samples/operators/operators.component";
import { SubjectsComponent } from "./samples/subjects/subjects.component";
import { SubsinkComponent } from "./samples/subsink/subsink.component";
import { UnsubscribingComponent } from "./samples/unsubscribing/unsubscribing.component";
import { UsingStreamsComponent } from "./samples/using-streams/using-streams.component";
import { VouchersService } from "./samples/voucher.service";
import { WhyObservablesComponent } from "./samples/whyObservables/why-observables.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "whyrxjs", component: WhyObservablesComponent },
      { path: "subjects", component: SubjectsComponent },
      { path: "creating", component: CreatingObservableComponent },
      { path: "observablescurd", component: ObservableCrudComponent },
      { path: "mousedomobs", component: MouseDomObservablesComponent },
      { path: "operators", component: OperatorsComponent },
      { path: "flexlayoutapi", component: FlexLayoutApiComponent },
      { path: "unsubscribe", component: UnsubscribingComponent },
      { path: "subsink", component: SubsinkComponent },
      { path: "streams", component: UsingStreamsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MovieRendererComponent,
    CreatingObservableComponent,
    ObservableCrudComponent,
    MouseDomObservablesComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    DebouncedSearchComponent,
    SubsinkComponent,
    SubjectsComponent,
    UsingStreamsComponent,
    WhyObservablesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    EmbedVideo.forRoot()
  ],
  providers: [DemoService, VouchersService, MovieService]
})
export class DemosModule {}
