import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CrudFormActionsComponent } from './crud-form-actions.component';

describe( 'CrudFormActionsComponent', () => {
    let component: CrudFormActionsComponent;
    let fixture: ComponentFixture<CrudFormActionsComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                FontAwesomeModule
            ],
            declarations: [ CrudFormActionsComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( CrudFormActionsComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
