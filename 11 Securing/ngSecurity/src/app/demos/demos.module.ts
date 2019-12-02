import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { DemoService } from "./demo.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WinAuthComponent } from "./samples/winauth/winauth.component";
import { FirebaseComponent } from "./samples/firebase/firebase.component";
import { AdalComponent } from "./samples/adal/adal.component";
import { LoginComponent } from "./samples/auth/login/login.component";
import { RegisterComponent } from "./samples/auth/register/register.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "winauth", component: WinAuthComponent },
      { path: "firebase", component: FirebaseComponent },
      { path: "adal", component: AdalComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    WinAuthComponent,
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
