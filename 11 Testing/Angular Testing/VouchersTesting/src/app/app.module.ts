import { AuthService } from './shared/auth.service';
import { PersonService } from './demos/person.service';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { LoginComponent } from './shared/login/login.component';
import { TestingComponent } from './demos/testing/testing.component';
import { VouchersService } from './vouchers/voucher.service';
import { HttpModule } from '@angular/http';
import { RouteGuard } from './route.guard.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatchHeightDirective } from './shared/match-height/match-height.directive';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe)

@NgModule({
  declarations: [
    AppComponent,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent, 
    LoginComponent,
    TestingComponent,
    AdminComponent,
    NavbarComponent,
    MatchHeightDirective    
  ],
  imports: [
    FormsModule,
    HttpModule,    
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    VouchersService,
    {provide: LOCALE_ID, useValue: "de-DE"},
    RouteGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
