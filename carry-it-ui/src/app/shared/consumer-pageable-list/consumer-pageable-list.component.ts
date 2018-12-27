import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, TemplateRef, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { IPageableDataProvider } from '../../data-handling/IPageableDataProvider.interface';
import { PAGEABLE_DATA_PROVIDER } from '../../data-handling/pageable-data-provider.token';
import { TemplateListItemContext } from '../template-list/template-list-item-context.interface';


@Component( {
    selector: 'ci-consumer-pageable-list',
    templateUrl: './consumer-pageable-list.component.html',
    styleUrls: [ './consumer-pageable-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ConsumerPageableListComponent<T> {

    @Input() itemTemplate?: TemplateRef<TemplateListItemContext<T>>;
    @Input() trackByFn?: TrackByFunction<T>;
    @Input() selectable = true;
    @Input() selected?: T;

    @Output() itemClick = new EventEmitter<T>();
    @Output() selectionChange = new EventEmitter<T | null>();

    constructor( @Inject( PAGEABLE_DATA_PROVIDER ) private readonly pageableDataProvider: IPageableDataProvider<T> ) {
    }

    get items$(): Observable<T[]> {
        return this.pageableDataProvider.items$;
    }

    get totalElements$(): Observable<number> {
        return this.pageableDataProvider.totalElements$;
    }

    get totalPages$(): Observable<number> {
        return this.pageableDataProvider.totalPages$;
    }

    get actualPage$(): Observable<number> {
        return this.pageableDataProvider.actualPage$;
    }

    get pageSize$(): Observable<number> {
        return this.pageableDataProvider.pageSize$;
    }

    onPageChange( newPage: number ): void {
        this.pageableDataProvider.goToPage$( newPage ).subscribe();
    }

    onPageSizeChange( newPageSize: number ): void {
        this.pageableDataProvider.setPageSize$( newPageSize ).subscribe();
    }
}
