import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, TrackByFunction } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, map, share, switchMap } from 'rxjs/operators';
import { DEFAULT_PAGE_SIZE, IPageableItemGeneratorFn, PagedResponse } from '../../graphql-api/models/pagination.interface';
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
    @Input() pageableItemGeneratorFn: IPageableItemGeneratorFn<T>;
    @Input() selectable = true;
    @Input() selected?: T;

    @Output() itemClick = new EventEmitter<T>();
    @Output() selectionChange = new EventEmitter<T|null>();

    readonly items$: Observable<T[]>;
    readonly totalItems$: Observable<number>;
    readonly totalPages$: Observable<number>;
    private readonly actualPageSource = new BehaviorSubject( 0 );
    private readonly pageSizeSource = new BehaviorSubject( DEFAULT_PAGE_SIZE );
    private readonly pagedResponse$: Observable<PagedResponse<T>>;

    constructor() {
        this.pagedResponse$ = combineLatest(
            this.actualPage$,
            this.pageSize$
        ).pipe(
            debounceTime( 10 ),
            switchMap( ( [ page, size ]: [ number, number ] ) => {
                if ( !this.pageableItemGeneratorFn ) {
                    throw new Error( 'required input missing: "pageableItemGeneratorFn"' );
                }
                return this.pageableItemGeneratorFn( page, size );
            } ),
            share()
        );

        this.items$ = this.pagedResponse$.pipe(
            map( response => response.items )
        );
        this.totalItems$ = this.pagedResponse$.pipe(
            map( response => response.pageInfo.totalElements )
        );
        this.totalPages$ = this.pagedResponse$.pipe(
            map( response => response.pageInfo.totalPages )
        );
    }

    get actualPage$(): Observable<number> {
        return this.actualPageSource.asObservable();
    }

    get pageSize$(): Observable<number> {
        return this.pageSizeSource.asObservable();
    }

    onPageChange( newPage: number ): void {
        this.actualPageSource.next( newPage );
    }

    onPageSizeChange( newPageSize: number ): void {
        this.pageSizeSource.next( newPageSize );
        this.onPageChange( 0 );
    }
}
