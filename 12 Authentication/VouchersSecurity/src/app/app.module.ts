import { HttpModule } from '@angular/http';
import { AuthService } from './shared/auth/auth.service';
import { SignupComponent } from './shared/auth/signup/signup.component';
import { SigninComponent } from './shared/auth/signin/signin.component';
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
import { VouchersService } from './vouchers/voucher.service';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { AdminComponent } from './admin/admin.component';
import { MatchHeightDirective } from './shared/match-height/match-height.directive';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouteGuard } from './route.guard.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SecurityComponent } from './demos/security/security.component';
import { AuthGuard } from './shared/index';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    AccountsComponent,
    VouchersListComponent,
    DemosComponent,     
    AdminComponent,
    SigninComponent,
    SignupComponent,    
    MatchHeightDirective,
    SecurityComponent
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
    AuthService,
    {provide: LOCALE_ID, useValue: "de-DE"},
    RouteGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
