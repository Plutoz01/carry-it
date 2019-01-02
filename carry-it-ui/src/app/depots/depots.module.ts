import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraphqlApiModule } from '../graphql-api/graphql-api.module';
import { LoadingOverlayModule } from '../shared/loading-overlay/loading-overlay.module';
import { MasterDetailModule } from '../shared/master-detail/master-detail.module';
import { DepotEditFormComponent } from './components/depot-edit-form/depot-edit-form.component';
import { DepotsRoutingModule } from './depots-routing.module';
import { CreateDepotComponent } from './pages/create-depot/create-depot.component';
import { DepotAdminComponent } from './pages/depot-admin/depot-admin.component';
import { DepotQueryParamResolver } from './resolvers/depot-query-param-resolver.service';
import { DepotService } from './services/depot.service';

@NgModule( {
    declarations: [ DepotAdminComponent, DepotEditFormComponent, CreateDepotComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,

        GraphqlApiModule,
        DepotsRoutingModule,
        MasterDetailModule,
        LoadingOverlayModule
    ],
    providers: [
        DepotService,
        DepotQueryParamResolver
    ]
} )
export class DepotsModule {
}
