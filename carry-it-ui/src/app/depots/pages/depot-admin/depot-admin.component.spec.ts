import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateListModule } from '../../../shared/template-list/template-list.module';
import { DepotService } from '../../services/depot.service';
import { DepotServiceMock } from '../../services/depot.service.mock';
import { DepotAdminComponent } from './depot-admin.component';

describe( 'DepotListComponent', () => {
    let component: DepotAdminComponent;
    let fixture: ComponentFixture<DepotAdminComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                TemplateListModule
            ],
            declarations: [ DepotAdminComponent ],
            providers: [
                { provide: DepotService, useClass: DepotServiceMock }
            ]
        } ).compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( DepotAdminComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
