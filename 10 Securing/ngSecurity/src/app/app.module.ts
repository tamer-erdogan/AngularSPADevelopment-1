import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { environment } from "src/environments/environment";
import { MsAdalAngular6Module } from "microsoft-adal-angular6";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./demos/samples/auth/auth.interceptor";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MsAdalAngular6Module.forRoot(environment.o365Config)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
