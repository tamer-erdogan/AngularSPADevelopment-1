import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { FirebaseService } from './samples/firebase.service';
import { HttpClientsComponent } from './samples/http-clients/http-clients.component';
import { ObservableCrudComponent } from './samples/observable-crud/observable-crud.component';
import { VouchersService } from './samples/voucher.service';
import { NgDemoAppInterceptor } from './samples/ngdemoapp.interceptor';
import { SharedModule } from '../shared/shared.module';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'clients', component: HttpClientsComponent },
      { path: 'observablescurd', component: ObservableCrudComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    HttpClientsComponent,
    ObservableCrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    DemoService,
    VouchersService,
    FirebaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgDemoAppInterceptor,
      multi: true
    }
  ]
})
export class DemosModule {}
