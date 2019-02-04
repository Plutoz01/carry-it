import { BehaviorSubject, Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { PagedResponse } from '../graphql-api/models/pagination.interface';
import { AbstractPageableDataProvider } from './abstract-pageable-data-provider.class';
import { IFilterableDataProvider } from './filterable-data-provider.interface';

export abstract class AbstractFilterableDataProvider<T> extends AbstractPageableDataProvider<T> implements IFilterableDataProvider<T> {

    private readonly queryTextSource = new BehaviorSubject( '' );

    get queryText$(): Observable<string> {
        return this.queryTextSource.asObservable();
    }

    setQueryText$( text: string ): Observable<T[]> {
        if ( typeof text === 'string' ) {
            text = text.trim();
        }
        this.queryTextSource.next( text );
        return this.goToPage$( 0, true );
    }

    protected getItems$( page: number, size: number ): Observable<PagedResponse<T>> {
        return this.queryText$.pipe(
            first(),
            switchMap( queryText => this.getFilteredItems$( page, size, queryText ) )
        );
    }

    protected abstract getFilteredItems$( page: number, size: number, queryText: string ): Observable<PagedResponse<T>>;
}
