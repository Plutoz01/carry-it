import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateListComponent } from './template-list.component';

describe( 'TemplateListComponent', () => {
    let component: TemplateListComponent<any>;
    let fixture: ComponentFixture<TemplateListComponent<any>>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ TemplateListComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( TemplateListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
