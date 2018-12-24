import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TemplateListModule } from '../shared/template-list/template-list.module';
import { DepotsRoutingModule } from './depots-routing.module';
import { DepotListComponent } from './pages/depot-list/depot-list.component';
import { DepotService } from './services/depot.service';

@NgModule( {
    declarations: [ DepotListComponent ],
    imports: [
        CommonModule,
        HttpClientModule,

        DepotsRoutingModule,
        TemplateListModule
    ],
    providers: [
        DepotService
    ]
} )
export class DepotsModule {
}
