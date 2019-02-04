import { TestBed } from '@angular/core/testing';
import { GetAllVehicleQuery } from '../../graphql-api/queries/vehicles/get-all.query';
import { GetAllVehicleQueryMock } from '../../graphql-api/queries/vehicles/get-all.query.mock';
import { VehicleService } from './vehicle.service';

describe( 'VehicleService', () => {
    beforeEach( () => TestBed.configureTestingModule( {
        providers: [
            VehicleService,
            { provide: GetAllVehicleQuery, useClass: GetAllVehicleQueryMock }
        ]
    } ) );

    it( 'should be created', () => {
        const service: VehicleService = TestBed.get( VehicleService );
        expect( service ).toBeTruthy();
    } );
} );
