import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateListModule } from '../../../shared/template-list/template-list.module';
import { DepotService } from '../../services/depot.service';
import { DepotServiceMock } from '../../services/depot.service.mock';
import { DepotListComponent } from './depot-list.component';

describe( 'DepotListComponent', () => {
    let component: DepotListComponent;
    let fixture: ComponentFixture<DepotListComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                TemplateListModule
            ],
            declarations: [ DepotListComponent ],
            providers: [
                { provide: DepotService, useClass: DepotServiceMock }
            ]
        } ).compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( DepotListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
