import { InjectionToken } from '@angular/core';
import { IPageableDataProvider } from './IPageableDataProvider.interface';

export const PAGEABLE_DATA_PROVIDER = new InjectionToken<IPageableDataProvider<any>>( 'data-handling.pageable-data-provider' );
