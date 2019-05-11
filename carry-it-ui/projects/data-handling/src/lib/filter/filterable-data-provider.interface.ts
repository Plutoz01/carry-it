import { Observable } from 'rxjs';
import { IPageableDataProvider } from '../pagination/pageable-data-provider.interface';

export interface IFilterableDataProvider<T> extends IPageableDataProvider<T> {
    readonly queryText$: Observable<string>;

    setQueryText$( text: string ): Observable<T[]>;
}
