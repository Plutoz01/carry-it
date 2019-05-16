import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateListModule } from 'common-ui/lib/template-list/template-list.module';
import { DepotService } from '../../services/depot.service';
import { DepotServiceMock } from '../../test/services/depot.service.mock';
import { CustomerAdminPage } from './customer-admin.page';

describe( 'DepotListComponent', () => {
    let component: CustomerAdminPage;
    let fixture: ComponentFixture<CustomerAdminPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                TemplateListModule
            ],
            declarations: [ CustomerAdminPage ],
            providers: [
                { provide: DepotService, useClass: DepotServiceMock }
            ]
        } ).compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( CustomerAdminPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
