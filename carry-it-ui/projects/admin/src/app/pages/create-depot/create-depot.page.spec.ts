import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepotPage } from './create-depot.page';

describe( 'CreateDepotPage', () => {
    let component: CreateDepotPage;
    let fixture: ComponentFixture<CreateDepotPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ CreateDepotPage ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( CreateDepotPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
