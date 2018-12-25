import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GraphqlApiModule } from '../graphql-api/graphql-api.module';
import { TemplateListModule } from '../shared/template-list/template-list.module';
import { DepotsRoutingModule } from './depots-routing.module';
import { DepotListComponent } from './pages/depot-list/depot-list.component';
import { DepotService } from './services/depot.service';

@NgModule( {
    declarations: [ DepotListComponent ],
    imports: [
        CommonModule,

        GraphqlApiModule,
        DepotsRoutingModule,
        TemplateListModule
    ],
    providers: [
        DepotService
    ]
} )
export class DepotsModule {
}
