import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailComponent } from './master-detail.component';

describe( 'MasterDetailComponent', () => {
    let component: MasterDetailComponent<any, any>;
    let fixture: ComponentFixture<MasterDetailComponent<any, any>>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ MasterDetailComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( MasterDetailComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
