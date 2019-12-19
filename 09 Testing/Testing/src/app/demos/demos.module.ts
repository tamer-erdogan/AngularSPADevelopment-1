import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { DemoContainerComponent } from "./demo-container/demo-container.component";
import { DemoService } from "./demo.service";
import { FoodRowComponent } from "./samples/integration-tests/food-row/food-row.component";
import { IntegrationTestComponent } from "./samples/integration-tests/integration-test.component";
import { IntroE2eComponent } from "./samples/intro-e2e/intro-e2e.component";
import { RatingPipe } from "./samples/pipe/rating.pipe";
import { TestPipeComponent } from "./samples/pipe/test-pipe.component";
import { FoodComponent } from "./samples/simple-comp/food.component";
import { SimpleServiceComponent } from "./samples/simple-service/simple-service.component";
import { UnitTestingComponent } from "./samples/simple-tests/unit-testing.component";
import { FoodListComponent } from "./samples/integration-tests/food-list/food-list.component";
import { SharedModule } from "../shared/shared.module";
import { UseMockComponent } from "./samples/use-mock/use-mock.component";
import { IntroAsyncComponent } from "./samples/intro-async/intro-async.component";

const demoRoutes: Routes = [
  {
    path: "",
    component: DemoContainerComponent,

    children: [
      { path: "unittesting", component: UnitTestingComponent },
      { path: "testpipe", component: TestPipeComponent },
      { path: "simpleservice", component: SimpleServiceComponent },
      { path: "simplecomp", component: FoodComponent },
      { path: "integrationtests", component: IntegrationTestComponent },
      { path: "introe2e", component: IntroE2eComponent },
      { path: "async", component: IntroAsyncComponent },
      { path: "mock", component: UseMockComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    UnitTestingComponent,
    TestPipeComponent,
    FoodComponent,
    IntegrationTestComponent,
    IntroE2eComponent,
    SimpleServiceComponent,
    TestPipeComponent,
    RatingPipe,
    FoodComponent,
    FoodRowComponent,
    FoodListComponent,
    UseMockComponent,
    IntroAsyncComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  providers: [DemoService]
})
export class DemosModule {}
