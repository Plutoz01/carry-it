import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotEditFormComponent } from './depot-edit-form.component';

describe( 'DepotEditFormComponent', () => {
    let component: DepotEditFormComponent;
    let fixture: ComponentFixture<DepotEditFormComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ DepotEditFormComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( DepotEditFormComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
