import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GetAllDepotQuery } from '../graphql-api/queries/depots/get-all.query';
import { GetAllDepotQueryMock } from '../test/graphql-api/depots/get-all.query.mock';

import { DepotService } from './depot.service';

describe( 'DepotService', () => {
    beforeEach( () => TestBed.configureTestingModule( {
        imports: [
            HttpClientTestingModule
        ],
        providers: [
            DepotService,
            { provide: GetAllDepotQuery, useClass: GetAllDepotQueryMock }
        ]
    } ) );

    it( 'should be created', () => {
        const service: DepotService = TestBed.get( DepotService );
        expect( service ).toBeTruthy();
    } );
} );
