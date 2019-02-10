import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickedOutsideModule } from '../clicked-outside/clicked-outside.module';
import { DropdownSearchComponent } from './dropdown-search.component';

@NgModule( {
    declarations: [ DropdownSearchComponent ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ClickedOutsideModule
    ],
    exports: [
        DropdownSearchComponent
    ]
} )
export class DropdownSearchModule {
}
