import { of } from 'rxjs';

export class DepotServiceMock {
    getAll$ = jasmine.createSpy( 'getAll$' ).and.returnValue( of( [] ) );
}
