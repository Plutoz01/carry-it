import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';

import { ConsumerPageableListComponent } from './consumer-pageable-list.component';

describe( 'ConsumerPageableListComponent', () => {
    let component: ConsumerPageableListComponent<any>;
    let fixture: ComponentFixture<ConsumerPageableListComponent<any>>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [
                ConsumerPageableListComponent,
                MockComponent( {
                    selector: 'ci-common-pageable-list',
                    inputs: [ 'items', 'itemTemplate', 'trackByFn', 'selectable', 'selected', 'actualPage', 'itemsCount', 'totalPages',
                        'pageSize', 'pageRangeWidth' ]
                } )
            ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( ConsumerPageableListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
