import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { APP_CONFIG } from '../../core/tokens/app-config.token';

import { DepotService } from './depot.service';

describe( 'DepotService', () => {
    beforeEach( () => TestBed.configureTestingModule( {
        imports: [
            HttpClientTestingModule
        ],
        providers: [
            DepotService,
            { provide: APP_CONFIG, useValue: environment.appConfig } // TODO: replace to test appConfig
        ]
    } ) );

    it( 'should be created', () => {
        const service: DepotService = TestBed.get( DepotService );
        expect( service ).toBeTruthy();
    } );
} );
