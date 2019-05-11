import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsumerPageableListModule } from '../consumer-pageable-list/consumer-pageable-list.module';
import { MasterDetailComponent } from './master-detail.component';

@NgModule( {
    declarations: [ MasterDetailComponent ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ConsumerPageableListModule
    ],
    exports: [
        MasterDetailComponent
    ]
} )
export class MasterDetailModule {
}
