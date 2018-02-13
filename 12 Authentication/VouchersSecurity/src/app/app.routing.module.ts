import { AuthGuard } from './shared/auth/auth-guard.service';
import { SigninComponent } from './shared/auth/signin/signin.component';
import { SignupComponent } from './shared/auth/signup/signup.component';
import { DemosComponent } from './demos/demos.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RouteGuard } from './route.guard.service';
import { SecurityComponent } from './demos/security/security.component';

const appRoutes: Routes = [
    { path: '',
      component: DemosComponent,
      children: [
        { path: 'sec', component: SecurityComponent },
      ]
    },
    { path: 'vouchers',
      component: VouchersListComponent,
      canActivate: [AuthGuard]
    },
    { path: 'vouchers/:id',
      component: VoucherComponent,
      canActivate: [AuthGuard]
    },
    { path: 'accounts',
      component: AccountsComponent,
      canActivate: [AuthGuard],
      data: { title: 'Accounts' }
    },    
    { path: 'signup',
      component: SignupComponent
    },    
    { path: 'signin',
      component: SigninComponent
    },
    {
      path: 'admin',
      component: AdminComponent ,
      data: { title: 'The protected Admin Page' },
      canActivate: [RouteGuard]
    }  
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
