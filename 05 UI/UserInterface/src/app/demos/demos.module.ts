import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { DemoService } from "./demo.service";
import { CSSBindingComponent } from "./samples/cssbinding/binding.component";
import { CssgridFlexlayoutComponent } from "./samples/cssgrid-flexlayout/cssgrid-flexlayout.component";
import { CssgridComponent } from "./samples/cssgrid/cssgrid.component";
import { DragDropComponent } from "./samples/drag-drop/drag-drop.component";
import { FlexLayoutComponent } from "./samples/flex-layout/flex-layout.component";
import { FlexMediaQueryComponent } from "./samples/flex-media-query/flex-media-query.component";
import { FlexboxComponent } from "./samples/flexbox/flexbox.component";
import { GoogleFontsComponent } from "./samples/google-fonts/google-fonts.component";
import { MaterialDialogComponent } from "./samples/material-dialog/material-dialog.component";
import { MaterialTableComponent } from "./samples/material-table/material-table.component";
import { UsingBootstrapComponent } from "./samples/using-bootstrap/using-bootstrap.component";
import { UsingMaterialComponent } from "./samples/using-material/using-material.component";
import { VirtualScrollComponent } from "./samples/virtual-scroll/virtual-scroll.component";
import { StepperComponent } from "./samples/stepper/stepper.component";
import { CalculatorComponent } from "./samples/calculator/calculator.component";
import { ClassicDialogComponent } from "./samples/classic-dialog/classic-dialog.component";
import { DialogComponent } from "./samples/classic-dialog/dialog/dialog.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "cssbasics", component: CSSBindingComponent },
      { path: "bootstrap", component: UsingBootstrapComponent },
      { path: "cssgrid", component: CssgridComponent },
      { path: "cssgrid-flex", component: CssgridFlexlayoutComponent },
      { path: "material", component: UsingMaterialComponent },
      { path: "material-table", component: MaterialTableComponent },
      { path: "classic-dialog", component: ClassicDialogComponent },
      { path: "material-dialog", component: MaterialDialogComponent },
      { path: "stepper", component: StepperComponent },
      { path: "fonts", component: GoogleFontsComponent },
      { path: "flexbox", component: FlexboxComponent },
      { path: "flexmediaq", component: FlexMediaQueryComponent },
      { path: "flexlayout", component: FlexLayoutComponent },
      { path: "dragdrop", component: DragDropComponent },
      { path: "virtualscroll", component: VirtualScrollComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CSSBindingComponent,
    UsingBootstrapComponent,
    CssgridComponent,
    CssgridFlexlayoutComponent,
    UsingMaterialComponent,
    MaterialTableComponent,
    MaterialDialogComponent,
    GoogleFontsComponent,
    FlexboxComponent,
    FlexMediaQueryComponent,
    FlexLayoutComponent,
    DragDropComponent,
    VirtualScrollComponent,
    StepperComponent,
    CalculatorComponent,
    ClassicDialogComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    DragDropModule,
    ScrollingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [DemoService],
  entryComponents: [CalculatorComponent, DialogComponent]
})
export class DemosModule {}
