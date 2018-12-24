import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../core/models/app-config.interface';
import { APP_CONFIG } from '../../core/tokens/app-config.token';
import { Depot } from '../models/depot.interface';

@Injectable()
export class DepotService {
    readonly getAllDepotsEndpoint = `${this.appConfig.apiBaseUrl}/v1/depot`;

    constructor(
        @Inject( APP_CONFIG ) private readonly appConfig: AppConfig,
        private readonly http: HttpClient ) {
    }

    getAll$(): Observable<Depot[]> {
        return this.http.get<Depot[]>( this.getAllDepotsEndpoint );
    }
}
