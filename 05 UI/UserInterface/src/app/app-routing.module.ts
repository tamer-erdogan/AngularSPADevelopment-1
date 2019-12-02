import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "demos",
    loadChildren: () => import("./demos/demos.module").then(m => m.DemosModule)
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
