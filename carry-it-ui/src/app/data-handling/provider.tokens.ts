import { InjectionToken } from '@angular/core';
import { IIdentifiable } from '../domain/identifiable.interface';
import { ICrudService } from './crud-service.interface';
import { IPageableDataProvider } from './pageable-data-provider.interface';

export const PAGEABLE_DATA_PROVIDER_TOKEN = new InjectionToken<IPageableDataProvider<any>>( 'data-handling.pageable-data-provider' );

export const CRUD_SERVICE_TOKEN = new InjectionToken<ICrudService<any, IIdentifiable<any>>>('data-handling.crud-service-token');
