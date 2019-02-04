import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, TrackByFunction, } from '@angular/core';
import { PaginatorComponent } from '../../../paginator/components/paginator/paginator.component';
import { TemplateListItemContext } from '../../../template-list/template-list-item-context.interface';

@Component( {
    selector: 'ci-pageable-list',
    templateUrl: './pageable-list.component.html',
    styleUrls: [ './pageable-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class PageableListComponent<T> {
    static readonly defaultPageSizes = [ 5, 10, 25, 50, 100 ];

    // list related inputs
    @Input() items: T[];
    @Input() itemTemplate?: TemplateRef<TemplateListItemContext<T>>;
    @Input() trackByFn?: TrackByFunction<T>;
    @Input() selectable = true;
    @Input() selected: T;

    // paginator related inputs
    @Input() actualPage = 0;
    @Input() totalPages = 0;
    @Input() firstAndLastButtonVisible = true;
    @Input() prevAndNextButtonVisible = true;
    @Input() pageRangeWidth: number = PaginatorComponent.defaultPageRangeWidth;

    // other inputs
    @Input() itemsCount?: number;
    @Input() pageSize: number;
    @Input() pageSizes: number[] = PageableListComponent.defaultPageSizes;

    // list related outputs
    @Output() itemClick = new EventEmitter<T>();
    @Output() selectionChange = new EventEmitter<T|null>();

    // paginator related outputs
    @Output() pageChange = new EventEmitter<number>();

    // other outputs
    @Output() pageSizeChange = new EventEmitter<number>();

    onPageSizeChange( newPageSize: string ): void {
        this.pageSizeChange.emit( parseInt( newPageSize, 0 ) );
    }
}
