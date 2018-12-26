import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GraphqlApiModule } from '../graphql-api/graphql-api.module';
import { ConsumerPageableListModule } from '../shared/consumer-pageable-list/consumer-pageable-list.module';
import { DepotsRoutingModule } from './depots-routing.module';
import { DepotListComponent } from './pages/depot-list/depot-list.component';
import { DepotService } from './services/depot.service';

@NgModule( {
    declarations: [ DepotListComponent ],
    imports: [
        CommonModule,

        GraphqlApiModule,
        DepotsRoutingModule,
        ConsumerPageableListModule
    ],
    providers: [
        DepotService
    ]
} )
export class DepotsModule {
}
