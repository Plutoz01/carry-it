import { BehaviorSubject, Observable, zip } from 'rxjs';
import { finalize, first, map, switchMap } from 'rxjs/operators';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../graphql-api/models/pagination.interface';
import { IPageableDataProvider } from './IPageableDataProvider.interface';

export abstract class AbstractPageableDataProvider<T> implements IPageableDataProvider<T> {
    private readonly itemsSource = new BehaviorSubject<T[]>( [] );
    private readonly totalElementsSource = new BehaviorSubject<number>( 0 );
    private readonly totalPagesSource = new BehaviorSubject<number>( 0 );
    private readonly pageSizeSource = new BehaviorSubject<number>( DEFAULT_PAGE_SIZE );
    private readonly actualPageSource = new BehaviorSubject<number>( 0 );
    private readonly isLoadingSource = new BehaviorSubject<boolean>( false );

    get items$(): Observable<T[]> {
        return this.itemsSource.asObservable();
    }

    get totalElements$(): Observable<number> {
        return this.totalElementsSource.asObservable();
    }

    get actualPage$(): Observable<number> {
        return this.actualPageSource.asObservable();
    }

    get totalPages$(): Observable<number> {
        return this.totalPagesSource.asObservable();
    }

    get pageSize$(): Observable<number> {
        return this.pageSizeSource.asObservable();
    }

    get isLoading$(): Observable<boolean> {
        return this.isLoadingSource.asObservable();
    }

    reload$(): Observable<T[]> {
        this.isLoadingSource.next( true );
        return zip(
            this.actualPage$,
            this.pageSize$
        ).pipe(
            first(),
            switchMap( ( [ page, size ] ) => this.getItems$( page, size ) ),
            map( ( pagedResponse: PagedResponse<T> ) => {
                this.itemsSource.next( pagedResponse.items );
                this.totalElementsSource.next( pagedResponse.pageInfo.totalElements );
                this.totalPagesSource.next( pagedResponse.pageInfo.totalPages );
                return pagedResponse.items;
            } ),
            finalize( () => this.isLoadingSource.next( false ) )
        );
    }

    goToPage$( targetPage: number ): Observable<T[]> {
        return zip(
            this.actualPage$,
            this.totalPages$
        ).pipe(
            first(),
            switchMap( ( [ actualPage, totalPages ] ) => {
                if ( actualPage === targetPage ) {
                    return this.items$.pipe(
                        first()
                    );
                }
                if ( targetPage < 0 || targetPage > totalPages ) {
                    throw new Error( `Target page is out of valid range ( 0-${totalPages} ). actual: ${targetPage}` );
                }

                this.actualPageSource.next( targetPage );
                return this.reload$();
            } )
        );
    }

    nextPage$(): Observable<T[]> {
        return zip(
            this.actualPage$,
            this.totalPages$
        ).pipe(
            first(),
            switchMap( ( [ actualPage, totalPages ] ) => {
                if ( actualPage === totalPages ) {
                    return this.items$.pipe(
                        first()
                    );
                }

                this.actualPageSource.next( actualPage + 1 );
                return this.reload$();
            } )
        );
    }

    previousPage$(): Observable<T[]> {
        return this.actualPage$.pipe(
            first(),
            switchMap( ( actualPage ) => {
                if ( actualPage <= 0 ) {
                    return this.items$.pipe(
                        first()
                    );
                }

                this.actualPageSource.next( actualPage - 1 );
                return this.reload$();
            } )
        );
    }

    setPageSize$( targetPageSize: number ): Observable<T[]> {
        if ( targetPageSize <= 0 ) {
            throw new Error( 'Page size must be greather than 0.' );
        }
        this.pageSizeSource.next( targetPageSize );
        this.actualPageSource.next( 0 );

        return this.reload$();
    }

    protected abstract getItems$( page: number, size: number ): Observable<PagedResponse<T>>;
}
