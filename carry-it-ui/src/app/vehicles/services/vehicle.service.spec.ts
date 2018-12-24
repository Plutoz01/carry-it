import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { APP_CONFIG } from '../../core/tokens/app-config.token';
import { VehicleService } from './vehicle.service';

describe( 'VehicleService', () => {
    beforeEach( () => TestBed.configureTestingModule( {
        imports: [
            HttpClientTestingModule
        ],
        providers: [
            VehicleService,
            { provide: APP_CONFIG, useValue: environment.appConfig } // TODO: replate to test appConfig
        ]
    } ) );

    it( 'should be created', () => {
        const service: VehicleService = TestBed.get( VehicleService );
        expect( service ).toBeTruthy();
    } );
} );
