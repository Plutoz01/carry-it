import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class VehicleService {

    public getAll$(): Observable<string[]> {
        return of( [ 'vehicle 1', 'vehicle 2', 'vehicle 3' ] );
    }
}
