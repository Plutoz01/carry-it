import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockComponent } from 'ng2-mock-component';
import { TemplateListComponent } from '../../template-list/template-list/template-list.component';
import { PageableListComponent } from './pageable-list.component';

describe( 'ExamplePageableListComponent', () => {
    let component: PageableListComponent<string>;
    let fixture: ComponentFixture<PageableListComponent<any>>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [
                PageableListComponent,
                TemplateListComponent,
                MockComponent( {
                    selector: 'ci-paginator ',
                    inputs: [ 'actualPage', 'totalPages', 'firstAndLastButtonVisible', 'prevAndNextButtonVisible', 'pageRangeWidth' ]
                } )
            ],
            imports: [
                FormsModule
            ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( PageableListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should be created', () => {
        expect( component ).toBeTruthy();
    } );
} );
