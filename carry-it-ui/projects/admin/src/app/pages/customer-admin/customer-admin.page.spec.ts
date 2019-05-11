import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateListModule } from '../../../../../common-ui/src/lib/template-list/template-list.module';
import { DepotService } from '../../services/depot.service';
import { DepotServiceMock } from '../../test/services/depot.service.mock';
import { DepotAdminPage } from './depot-admin.page';

describe( 'DepotListComponent', () => {
    let component: DepotAdminPage;
    let fixture: ComponentFixture<DepotAdminPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                TemplateListModule
            ],
            declarations: [ DepotAdminPage ],
            providers: [
                { provide: DepotService, useClass: DepotServiceMock }
            ]
        } ).compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( DepotAdminPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
