import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateListComponent } from './template-list/template-list.component';

@NgModule( {
    declarations: [ TemplateListComponent ],
    imports: [
        CommonModule
    ],
    exports: [
        TemplateListComponent
    ]
} )
export class TemplateListModule {
}

export * from './template-list-item-context.interface';
