import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageableListModule } from '../pageable-list/pageable-list.module';
import { ConsumerPageableListComponent } from './consumer-pageable-list.component';

@NgModule( {
    declarations: [ ConsumerPageableListComponent ],
    imports: [
        CommonModule,
        PageableListModule
    ],
    exports: [
        ConsumerPageableListComponent
    ]
} )
export class ConsumerPageableListModule {
}
