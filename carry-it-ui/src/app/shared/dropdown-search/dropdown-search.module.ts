import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownSearchComponent } from './dropdown-search.component';

@NgModule( {
    declarations: [ DropdownSearchComponent ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        DropdownSearchComponent
    ]
} )
export class DropdownSearchModule {
}
