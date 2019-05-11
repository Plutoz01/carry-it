import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule( {
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    declarations: [
        PaginatorComponent
    ],
    exports: [
        PaginatorComponent
    ]
} )
export class PaginatorModule {
}
