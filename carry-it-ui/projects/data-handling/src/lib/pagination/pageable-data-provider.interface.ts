import { Observable } from 'rxjs';
import { IDataProvider } from '../data-provider.interface';

export interface IPageableDataProvider<T> extends IDataProvider<T> {
    readonly totalElements$: Observable<number>;
    readonly totalPages$: Observable<number>;
    readonly actualPage$: Observable<number>;
    readonly pageSize$: Observable<number>;

    nextPage$(): Observable<T[]>;
    previousPage$(): Observable<T[]>;
    goToPage$( targetPage: number, forceReload?: boolean ): Observable<T[]>;
    setPageSize$( targetPageSize: number ): Observable<T[]>;
}
