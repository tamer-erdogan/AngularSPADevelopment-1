import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { DemoService } from "./demo.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FirebaseComponent } from "./samples/firebase/firebase.component";
import { AdalComponent } from "./samples/adal/adal.component";
import { LoginComponent } from "./samples/firebase/components/login/login.component";
import { RegisterComponent } from "./samples/firebase/components/register/register.component";
import { FirebaseAuthInterceptor } from "./samples/firebase/firebase-auth.interceptor";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "firebase", component: FirebaseComponent },
      { path: "adal", component: AdalComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    FirebaseComponent,
    AdalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule
  ],
  providers: [DemoService]
})
export class DemosModule {}
