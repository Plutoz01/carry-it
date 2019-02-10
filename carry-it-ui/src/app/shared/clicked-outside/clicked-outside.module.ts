import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickedOutsideDirective } from './clicked-outside.directive';

@NgModule( {
    declarations: [ ClickedOutsideDirective ],
    imports: [
        CommonModule
    ],
    exports: [
        ClickedOutsideDirective
    ]
} )
export class ClickedOutsideModule {
}
