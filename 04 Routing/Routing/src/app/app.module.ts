import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { FormsModule } from '@angular/forms';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { VouchersService } from './vouchers/voucher.service';
import { HttpClientModule } from '@angular/common/http';
import { VoucherResolver } from './vouchers/voucher-resolver.service';
import { RouteGuard } from './route.guard.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { EditorComponent } from './shared/editor/editor.component';
import { UploaderComponent } from './shared/uploader/uploader.component';
import { AdminComponent } from './admin/admin.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoucherComponent,
    VouchersListComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    PageNotFoundComponent,
    EditorComponent,
    UploaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    CKEditorModule,
    AdminModule
  ],
  providers: [VouchersService, RouteGuard, VoucherResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
