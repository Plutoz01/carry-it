import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayContainerModule } from '../overlay-container/overlay-container.module';

import { LoadingOverlayComponent } from './loading-overlay.component';

describe( 'LoadingOverlayComponent', () => {
    let component: LoadingOverlayComponent;
    let fixture: ComponentFixture<LoadingOverlayComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
              FontAwesomeModule,
              OverlayContainerModule
            ],
            declarations: [ LoadingOverlayComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( LoadingOverlayComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
