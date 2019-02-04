import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from '../paginator/paginator.module';
import { TemplateListModule } from '../template-list/template-list.module';
import { PageableListComponent } from './components/pageable-list/pageable-list.component';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        PaginatorModule,
        TemplateListModule
    ],
    declarations: [
        PageableListComponent
    ],
    exports: [
        FormsModule,
        PaginatorModule,
        TemplateListModule,
        PageableListComponent
    ]
} )
export class PageableListModule {
}
