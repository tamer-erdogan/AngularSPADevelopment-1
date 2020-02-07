import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { DemoService } from "./demo.service";
import { HttpClientModule } from "@angular/common/http";
import { InlineComponent } from "./samples/inline/inline.component";
import { TemplateComponent } from "./samples/template/template.component";
import { PipesComponent } from "./samples/pipes/pipes.component";
import { DirectivesComponent } from "./samples/directives/directives.component";
import { StructDirectivesComponent } from "./samples/struct-directives/struct-directives.component";
import { BindingComponent } from "./samples/binding/binding.component";
import { RepeaterComponent } from "./samples/repeater/repeater.component";
import { ContainerComponent } from "./samples/container/container.component";
import { ContentProjectionComponent } from "./samples/content-projection/content-projection.component";
import { CustomDirectivesComponent } from "./samples/custom-directives/custom-directives.component";
import { CustomPipesComponent } from "./samples/custom-pipes/custom-pipes.component";
import { LocalizationComponent } from "./samples/localization/localization.component";
import { ExpressionsComponent } from "./samples/expressions/expressions.component";
import { ViewChildComponent } from "./samples/view-child/view-child.component";
import { VoucherFilterPipe } from "./samples/custom-pipes/voucher-filter.pipe";
import { FormsModule } from "@angular/forms";
import { ToEuroPipe } from "./samples/custom-pipes/to-euro.pipe";
import { CheckPipe } from "./samples/custom-pipes/check.pipe";
import { PersonEditComponent } from "./samples/persons/person-edit/person-edit.component";
import { PersonsListComponent } from "./samples/persons/persons-list/persons-list.component";
import { EmployeeComponent } from "./samples/content-projection/employee/employee.component";
import { DemoNavComponent } from "./samples/content-projection/demo-nav/demo-nav.component";
import { AlertComponent } from "./samples/view-child/alert/alert.component";
import { VouchersService } from "./samples/voucher.service";
import { PersonService } from "./samples/persons/person.service";
import { EuroDirective } from "./samples/custom-directives/euro.directive";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "inline", component: InlineComponent },
      { path: "template", component: TemplateComponent },
      { path: "pipes", component: PipesComponent },
      { path: "directives", component: DirectivesComponent },
      { path: "structdirectives", component: StructDirectivesComponent },
      { path: "binding", component: BindingComponent },
      { path: "repeater", component: RepeaterComponent },
      { path: "container", component: ContainerComponent },
      { path: "projection", component: ContentProjectionComponent },
      { path: "customdirectives", component: CustomDirectivesComponent },
      { path: "custompipes", component: CustomPipesComponent },
      { path: "localization", component: LocalizationComponent },
      { path: "expressions", component: ExpressionsComponent },
      { path: "viewchild", component: ViewChildComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CustomPipesComponent,
    VoucherFilterPipe,
    InlineComponent,
    TemplateComponent,
    PipesComponent,
    DirectivesComponent,
    StructDirectivesComponent,
    BindingComponent,
    RepeaterComponent,
    ContainerComponent,
    ContentProjectionComponent,
    CustomDirectivesComponent,
    LocalizationComponent,
    ExpressionsComponent,
    ViewChildComponent,
    ToEuroPipe,
    EuroDirective,
    CheckPipe,
    PersonEditComponent,
    PersonsListComponent,
    EmployeeComponent,
    DemoNavComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule
  ],
  providers: [DemoService, VouchersService, PersonService]
})
export class DemosModule {}
