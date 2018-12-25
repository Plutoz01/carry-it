import { of } from 'rxjs';

function emptyResponse() {
    return {
        data: {
            getAllVehicle: []
        }
    };
}

export class GetAllVehicleQueryMock {
    fetch = jasmine.createSpy( 'fetch' ).and.returnValue( of(emptyResponse()) );
}
