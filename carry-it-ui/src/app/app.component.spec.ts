import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng2-mock-component';
import { AppComponent } from './app.component';

describe( 'AppComponent', () => {
    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                MockComponent( { selector: 'ci-header-nav' } )
            ],
        } ).compileComponents();
    } ) );

    it( 'should create the app', () => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        expect( app ).toBeTruthy();
    } );

    it( `should have as title 'carry-it-ui'`, () => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        expect( app.title ).toEqual( 'carry-it-ui' );
    } );
} );
