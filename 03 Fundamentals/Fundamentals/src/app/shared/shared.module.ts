import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidePanelComponent } from "./side-panel/side-panel.component";

const mods = [NavbarComponent, SidePanelComponent, FooterComponent];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule],
  declarations: mods,
  exports: mods
})
export class SharedModule {}
