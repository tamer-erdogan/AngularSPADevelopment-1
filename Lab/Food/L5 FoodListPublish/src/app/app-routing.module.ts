import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FoodContainerComponent } from "./food/food-container/food-container.component";
import { AboutComponent } from "./about/about.component";
import { AuthGuard } from "./auth/auth-guard.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "food", component: FoodContainerComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
