import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSearchComponent } from './dropdown-search.component';

describe( 'DropdownSearchComponent', () => {
    let component: DropdownSearchComponent<any>;
    let fixture: ComponentFixture<DropdownSearchComponent<any>>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ DropdownSearchComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( DropdownSearchComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
