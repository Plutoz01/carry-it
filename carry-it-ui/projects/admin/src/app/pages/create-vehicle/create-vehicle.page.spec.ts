import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehiclePage } from './create-vehicle.page';

describe( 'CreateVehicleComponent', () => {
    let component: CreateVehiclePage;
    let fixture: ComponentFixture<CreateVehiclePage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ CreateVehiclePage ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( CreateVehiclePage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
