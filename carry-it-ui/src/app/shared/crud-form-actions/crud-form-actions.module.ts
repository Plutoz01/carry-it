import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CrudFormActionsComponent } from './crud-form-actions.component';

@NgModule( {
    declarations: [ CrudFormActionsComponent ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        CrudFormActionsComponent
    ]
} )
export class CrudFormActionsModule {
}
