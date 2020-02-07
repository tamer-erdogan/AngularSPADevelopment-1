import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MaterialModule } from "../material/material.module";

const comps = [NavbarComponent, SidebarComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [CommonModule, MaterialModule]
})
export class SharedModule {}
