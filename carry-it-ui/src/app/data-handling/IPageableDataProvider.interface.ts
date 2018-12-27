import { Observable } from 'rxjs';
import { IDataProvider } from './IDataProvider.interface';

export interface IPageableDataProvider<T> extends IDataProvider<T> {
    readonly totalElements$: Observable<number>;
    readonly totalPages$: Observable<number>;
    readonly actualPage$: Observable<number>;
    readonly pageSize$: Observable<number>;

    nextPage$(): Observable<T[]>;
    previousPage$(): Observable<T[]>;
    goToPage$( targetPage: number ): Observable<T[]>;
    setPageSize$( targetPageSize: number ): Observable<T[]>;
}
