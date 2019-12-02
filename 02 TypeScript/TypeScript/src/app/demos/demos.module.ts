import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { DemoService } from "./demo.service";
import { HttpClientModule } from "@angular/common/http";
import { TypesComponent } from "./samples/types/types.component";
import { ObjectLiteralsComponent } from "./samples/object-literals/object-literals.component";
import { ClassesComponent } from "./samples/classes/classes.component";
import { FunctionsComponent } from "./samples/functions/functions.component";
import { InterfacesComponent } from "./samples/interfaces/interfaces.component";
import { GenericsComponent } from "./samples/generics/generics.component";
import { ModulesComponent } from "./samples/modules/modules.component";
import { ServicesComponent } from "./samples/services/services.component";
import { Type } from "@angular/compiler";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "types", component: TypesComponent },
      { path: "objects", component: ObjectLiteralsComponent },
      { path: "classes", component: ClassesComponent },
      { path: "functions", component: FunctionsComponent },
      { path: "interfaces", component: InterfacesComponent },
      { path: "gernerics", component: GenericsComponent },
      { path: "modules", component: ModulesComponent },
      { path: "services", component: ServicesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    TypesComponent,
    ClassesComponent,
    FunctionsComponent,
    GenericsComponent,
    InterfacesComponent,
    ModulesComponent,
    ObjectLiteralsComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule
  ],
  providers: [DemoService]
})
export class DemosModule {}
