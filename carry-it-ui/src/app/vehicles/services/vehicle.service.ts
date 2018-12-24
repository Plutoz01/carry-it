import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../core/models/app-config.interface';
import { APP_CONFIG } from '../../core/tokens/app-config.token';
import { Vehicle } from '../models/vehicle.interface';

@Injectable()
export class VehicleService {
    readonly getAllVehicleEndpoint = `${this.appConfig.apiBaseUrl}/v1/vehicle`;

    constructor(
        @Inject( APP_CONFIG ) private readonly appConfig: AppConfig,
        private readonly http: HttpClient ) {
    }

    public getAll$(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>( this.getAllVehicleEndpoint );
    }
}
