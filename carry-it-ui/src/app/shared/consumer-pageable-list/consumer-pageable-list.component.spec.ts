import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPageableListComponent } from './consumer-pageable-list.component';

describe( 'ConsumerPageableListComponent', () => {
    let component: ConsumerPageableListComponent<any>;
    let fixture: ComponentFixture<ConsumerPageableListComponent<any>>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ ConsumerPageableListComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( ConsumerPageableListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
