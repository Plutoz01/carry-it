import { of } from 'rxjs';

function emptyResponse() {
    return {
        data: {
            getAllDepot: []
        }
    };
}

export class GetAllDepotQueryMock {
    fetch = jasmine.createSpy( 'fetch' ).and.returnValue( of(emptyResponse()) );
}
