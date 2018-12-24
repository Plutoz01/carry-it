import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.interface';

@Injectable()
export class VehicleService {

    public static readonly getAllVehiclesUrl = 'http://localhost:8100/api/v1/vehicle'; // TODO: retrieve this from common config src

    constructor( private readonly http: HttpClient ) {
    }

    public getAll$(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>( VehicleService.getAllVehiclesUrl );
    }
}
