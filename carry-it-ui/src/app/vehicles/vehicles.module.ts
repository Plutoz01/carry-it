import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GraphqlApiModule } from '../graphql-api/graphql-api.module';
import { ConsumerPageableListModule } from '../shared/consumer-pageable-list/consumer-pageable-list.module';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleService } from './services/vehicle.service';
import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule( {
    declarations: [ VehicleListComponent ],
    imports: [
        CommonModule,

        GraphqlApiModule,
        VehiclesRoutingModule,
        ConsumerPageableListModule
    ],
    providers: [
        VehicleService
    ]
} )
export class VehiclesModule {
}
