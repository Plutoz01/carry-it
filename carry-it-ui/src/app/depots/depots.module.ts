import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphqlApiModule } from '../graphql-api/graphql-api.module';
import { MasterDetailModule } from '../shared/master-detail/master-detail.module';
import { DepotsRoutingModule } from './depots-routing.module';
import { DepotAdminComponent } from './pages/depot-admin/depot-admin.component';
import { DepotQueryParamResolver } from './resolvers/depot-query-param-resolver.service';
import { DepotService } from './services/depot.service';
import { DepotEditFormComponent } from './components/depot-edit-form/depot-edit-form.component';

@NgModule( {
    declarations: [ DepotAdminComponent, DepotEditFormComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        GraphqlApiModule,
        DepotsRoutingModule,
        MasterDetailModule
    ],
    providers: [
        DepotService,
        DepotQueryParamResolver
    ]
} )
export class DepotsModule {
}
