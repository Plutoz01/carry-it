import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Output,
    TemplateRef,
    TrackByFunction
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPageableDataProvider, PAGEABLE_DATA_PROVIDER_TOKEN } from 'data-handling';
import { TemplateListItemContext } from '../template-list/template-list-item-context.interface';


@Component( {
    selector: 'ci-common-consumer-pageable-list',
    templateUrl: './consumer-pageable-list.component.html',
    styleUrls: [ './consumer-pageable-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ConsumerPageableListComponent<T> implements OnDestroy {

    @Input() itemTemplate?: TemplateRef<TemplateListItemContext<T>>;
    @Input() trackByFn?: TrackByFunction<T>;
    @Input() selectable = true;
    @Input() selected?: T;

    @Output() itemClick = new EventEmitter<T>();
    @Output() selectionChange = new EventEmitter<T | null>();

    private readonly onDestroySource = new Subject();

    constructor( @Inject( PAGEABLE_DATA_PROVIDER_TOKEN ) private readonly pageableDataProvider: IPageableDataProvider<T> ) {
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

    ngOnDestroy(): void {
        this.onDestroySource.next();
        this.onDestroySource.complete();
    }

    onPageChange( newPage: number ): void {
        this.pageableDataProvider.goToPage$( newPage )
            .pipe( takeUntil( this.onDestroySource ) )
            .subscribe();
    }

    onPageSizeChange( newPageSize: number ): void {
        this.pageableDataProvider.setPageSize$( newPageSize )
            .pipe( takeUntil( this.onDestroySource ) )
            .subscribe();
    }
}
