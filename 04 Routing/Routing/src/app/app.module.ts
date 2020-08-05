import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ngx-ckeditor';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { RouteGuard } from './route.guard.service';
import { EditorComponent } from './shared/editor/editor.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { UploaderComponent } from './shared/uploader/uploader.component';
import { VoucherResolver } from './vouchers/voucher-resolver.service';
import { VouchersService } from './vouchers/voucher.service';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';

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
    AdminComponent,
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
    AdminModule,
  ],
  providers: [VouchersService, RouteGuard, VoucherResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
