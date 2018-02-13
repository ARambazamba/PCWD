import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NestedComponent } from './demos/nested/nested.component';
import { RouterModule, Routes } from '@angular/router';
import { VouchersComponent } from './vouchers/vouchers.component';
import { VouchersService } from './vouchers/voucher.service';
import { ContentProjectionComponent } from './demos/content-projection/content-projection.component';
import { EmployeeComponent } from './demos/content-projection/employee/employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TypesComponent } from './demos/types/types.component';
import { ClassesComponent } from './demos/classes/classes.component';
import { FunctionsComponent } from './demos/functions/functions.component';
import { InterfacesComponent } from './demos/interfaces/interfaces.component';
import { GenericsComponent } from './demos/generics/generics.component';
import { ModulesComponent } from './demos/modules/modules.component';
import { ServicesComponent } from './demos/services/services.component';
import { ObjectLiteralsComponent } from './demos/object-literals/object-literals.component';

@NgModule({
  declarations: [
    AppComponent,    
    DemosComponent, 
    ContentProjectionComponent,
    EmployeeComponent,
    NavbarComponent,
    TypesComponent,
    ClassesComponent,
    FunctionsComponent,
    InterfacesComponent,
    GenericsComponent,
    ModulesComponent,
    ServicesComponent,
    ObjectLiteralsComponent    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [VouchersService,
  // {provide: LOCALE_ID, useValue: "de-DE"}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
