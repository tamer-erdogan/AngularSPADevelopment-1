import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { MainComponent } from "./main/main.component";
import { FoodContainerComponent } from './food/food-container/food-container.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodEditComponent } from './food/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    FoodContainerComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
