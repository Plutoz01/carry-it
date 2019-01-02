import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayContainerModule } from '../overlay-container/overlay-container.module';
import { LoadingOverlayComponent } from './loading-overlay.component';

@NgModule( {
    declarations: [
        LoadingOverlayComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        OverlayContainerModule
    ],
    exports: [
        LoadingOverlayComponent
    ]
} )
export class LoadingOverlayModule {
}
