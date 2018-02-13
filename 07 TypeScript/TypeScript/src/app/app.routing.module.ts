import { ClassesComponent } from './demos/classes/classes.component';
import { FunctionsComponent } from './demos/functions/functions.component';
import { InterfacesComponent } from './demos/interfaces/interfaces.component';
import { GenericsComponent } from './demos/generics/generics.component';
import { ModulesComponent } from './demos/modules/modules.component';
import { ServicesComponent } from './demos/services/services.component';
import { ContentProjectionComponent } from './demos/content-projection/content-projection.component';
import { DemosComponent } from './demos/demos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { TypesComponent } from "./demos/types/types.component";
import { ObjectLiteralsComponent } from './demos/object-literals/object-literals.component';

const appRoutes: Routes = [
    { path: '',
      component: DemosComponent,
      children: [        
        { path: 'types', component: TypesComponent },
        { path: 'objects', component: ObjectLiteralsComponent },
        { path: 'classes', component: ClassesComponent },
        { path: 'functions', component: FunctionsComponent },
        { path: 'interfaces', component: InterfacesComponent },
        { path: 'gernerics', component: GenericsComponent },
        { path: 'modules', component: ModulesComponent },
        { path: 'services', component: ServicesComponent }
      ]
    }    
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
