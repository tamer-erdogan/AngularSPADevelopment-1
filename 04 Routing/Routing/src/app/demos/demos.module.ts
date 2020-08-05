import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { VouchersService } from '../vouchers/voucher.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { ChildRoutesComponent } from './samples/child-routes/child-routes.component';
import { ParamMapComponent } from './samples/paramMap/param-map/param-map.component';
import { PmChildComponent } from './samples/paramMap/pm-child/pm-child.component';
import { PreloadComponent } from './samples/preload/preload.component';
import { RouteGuardsComponent } from './samples/route-guards/route-guards.component';
import { RoutingBasicsComponent } from './samples/routing-basics/routing-basics.component';
import { SecondaryRoutesComponent } from './samples/secondary-routes/secondary-routes.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'routingbasics', component: RoutingBasicsComponent },
      {
        path: 'parammap',
        component: ParamMapComponent,
        children: [{ path: ':id', component: PmChildComponent }],
      },
      { path: 'childroutes', component: ChildRoutesComponent },
      { path: 'secondary', component: SecondaryRoutesComponent },
      { path: 'routeguards', component: RouteGuardsComponent },
      { path: 'preload', component: PreloadComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    RoutingBasicsComponent,
    ChildRoutesComponent,
    SecondaryRoutesComponent,
    RouteGuardsComponent,
    PreloadComponent,
    ParamMapComponent,
    PmChildComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
  ],
  providers: [DemoService, VouchersService],
})
export class DemosModule {}
