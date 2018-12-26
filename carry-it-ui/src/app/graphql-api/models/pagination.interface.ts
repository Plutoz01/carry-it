import { Observable } from 'rxjs';

export interface PageInfo {
    totalElements?: number;
    totalPages?: number;
}

export interface PagedResponse<T> {
    items?: T[];
    pageInfo?: PageInfo;
}

export type IPageableItemGeneratorFn<T> = ( page: number, size: number ) => Observable<PagedResponse<T>>;


export const DEFAULT_PAGE_SIZE = 10;
