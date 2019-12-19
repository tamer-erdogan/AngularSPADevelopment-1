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
import { DebouncedSearchComponent } from "./samples/operators/debounced-search/debounced-search.component";
import { OperatorsComponent } from "./samples/operators/operators.component";
import { SubjectsComponent } from "./samples/subjects/subjects.component";
import { SubsinkComponent } from "./samples/subsink/subsink.component";
import { UnsubscribingComponent } from "./samples/unsubscribing/unsubscribing.component";
import { UsingStreamsComponent } from "./samples/using-streams/using-streams.component";
import { VouchersService } from "./samples/voucher.service";
import { WhyObservablesComponent } from "./samples/whyObservables/why-observables.component";
import { StatefulComponent } from "./samples/stateful/stateful.component";
import { SimpleDataStoreComponent } from "./samples/simple-data-store/simple-data-store.component";
import { EvtBusComponent } from "./samples/evt-bus/evt-bus.component";
import { VouchesContainerComponent } from "./samples/ngrx-vouchers/vouches-container/vouches-container.component";
import { VouchersListComponent } from "./samples/simple-data-store/voucher-list/vouchers-list.component";
import { KpiBarComponent } from "./samples/simple-data-store/kpi-bar/kpi-bar.component";
import { NgrxVouchersComponent } from "./samples/ngrx-vouchers/voucher-list/ngrx-vouchers.component";
import { VoucherEditComponent } from "./samples/ngrx-vouchers/voucher-edit/voucher-edit.component";
import { MarkdownEditorComponent } from "./markdown-editor/markdown-editor.component";
import { StoreModule } from "@ngrx/store";
import { demosFeatureKey, DemoReducer } from "./store/reducers/demos.reducer";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "whyrxjs", component: WhyObservablesComponent },
      { path: "subjects", component: SubjectsComponent },
      { path: "creating", component: CreatingObservableComponent },
      { path: "mousedomobs", component: MouseDomObservablesComponent },
      { path: "operators", component: OperatorsComponent },
      { path: "flexlayoutapi", component: FlexLayoutApiComponent },
      { path: "unsubscribe", component: UnsubscribingComponent },
      { path: "subsink", component: SubsinkComponent },
      { path: "streams", component: UsingStreamsComponent },
      { path: "stateful", component: StatefulComponent },
      { path: "simpleds", component: SimpleDataStoreComponent },
      { path: "evtbus", component: EvtBusComponent },
      { path: "ngrx", component: VouchesContainerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    MovieRendererComponent,
    CreatingObservableComponent,
    MouseDomObservablesComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    DebouncedSearchComponent,
    SubsinkComponent,
    SubjectsComponent,
    UsingStreamsComponent,
    WhyObservablesComponent,
    StatefulComponent,
    SimpleDataStoreComponent,
    EvtBusComponent,
    VouchesContainerComponent,
    VouchersListComponent,
    KpiBarComponent,
    NgrxVouchersComponent,
    VoucherEditComponent,
    MarkdownEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature(demosFeatureKey, DemoReducer),
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    EmbedVideo.forRoot()
  ],
  providers: [DemoService, VouchersService, MovieService]
})
export class DemosModule {}
