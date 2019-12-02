import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { DemoService } from "./demo.service";
import { TemplateDrivenComponent } from "./samples/template-driven/template-driven.component";
import { ReactiveFormsComponent } from "./samples/reactive-forms/reactive-forms.component";
import { FormsBuilderComponent } from "./samples/forms-builder/forms-builder.component";
import { TemplateValidationComponent } from "./samples/template-validation/template-validation.component";
import { ReactiveValidationComponent } from "./samples/reactive-validation/reactive-validation.component";
import { FormControlComponent } from "./samples/form-control/form-control.component";
import { FormArrayComponent } from "./samples/form-array/form-array.component";
import { ReactiveCascadeComponent } from "./samples/reactive-cascade/reactive-cascade.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "templatedriven", component: TemplateDrivenComponent },
      { path: "reactiveforms", component: ReactiveFormsComponent },
      { path: "formsbuilder", component: FormsBuilderComponent },
      { path: "templatevalidation", component: TemplateValidationComponent },
      { path: "reactivevalidation", component: ReactiveValidationComponent },
      { path: "formcontrol", component: FormControlComponent },
      { path: "formarray", component: FormArrayComponent },
      { path: "cascade", component: ReactiveCascadeComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    FormsBuilderComponent,
    TemplateValidationComponent,
    ReactiveValidationComponent,
    FormControlComponent,
    FormArrayComponent,
    ReactiveCascadeComponent
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
    })
  ],
  providers: [DemoService]
})
export class DemosModule {}
