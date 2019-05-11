import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerPage } from './create-depot.page';

describe( 'CreateCustomerPage', () => {
    let component: CreateCustomerPage;
    let fixture: ComponentFixture<CreateCustomerPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ CreateCustomerPage ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( CreateCustomerPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
