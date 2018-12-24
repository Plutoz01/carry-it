import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateListModule } from '../../../shared/template-list/template-list.module';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleServiceMock } from '../../services/vehicle.service.mock';
import { VehicleListComponent } from './vehicle-list.component';

describe( 'VehicleListComponent', () => {
    let component: VehicleListComponent;
    let fixture: ComponentFixture<VehicleListComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                TemplateListModule
            ],
            declarations: [ VehicleListComponent ],
            providers: [
                { provide: VehicleService, useClass: VehicleServiceMock }
            ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( VehicleListComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
