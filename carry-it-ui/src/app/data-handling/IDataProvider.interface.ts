import { Observable } from 'rxjs';

export interface IDataProvider<T> {
    readonly items$: Observable<T[]>;
    readonly isLoading$: Observable<boolean>;

    reload$(): Observable<T[]>;
}
