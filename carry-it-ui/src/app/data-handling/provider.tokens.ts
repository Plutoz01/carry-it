import { InjectionToken } from '@angular/core';
import { IPageableDataProvider } from './pageable-data-provider.interface';

export const PAGEABLE_DATA_PROVIDER = new InjectionToken<IPageableDataProvider<any>>( 'data-handling.pageable-data-provider' );
