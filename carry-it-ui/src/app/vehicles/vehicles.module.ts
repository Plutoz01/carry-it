import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TemplateListModule } from '../shared/template-list/template-list.module';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleService } from './services/vehicle.service';
import { VehiclesRoutingModule } from './vehicles-routing.module.';

@NgModule( {
    declarations: [ VehicleListComponent ],
    imports: [
        CommonModule,
        HttpClientModule,

        VehiclesRoutingModule,
        TemplateListModule
    ],
    providers: [
        VehicleService
    ]
} )
export class VehiclesModule {
}
