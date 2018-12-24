import { of } from 'rxjs';

export class VehicleServiceMock {
    getAll$ = jasmine.createSpy( 'getAll$' ).and.returnValue( of( [] ) );
}
