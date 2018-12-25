export interface PageInfo {
    totalElements?: number;
    totalPages?: number;
}

export interface PagedResponse<T> {
    items?: T[];
    pageInfo?: PageInfo;
}

export const DEFAULT_PAGE_SIZE = 10;
