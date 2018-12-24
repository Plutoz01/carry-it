import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleService } from './services/vehicle.service';
import { VehiclesRoutingModule } from './vehicles-routing.module.';

@NgModule( {
    declarations: [ VehicleListComponent ],
    imports: [
        CommonModule,
        HttpClientModule,
        VehiclesRoutingModule
    ],
    providers: [
        VehicleService
    ]
} )
export class VehiclesModule {
}
