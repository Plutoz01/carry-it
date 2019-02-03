import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAdminPage } from './vehicle-admin.page';

describe('VehicleAdminPage', () => {
  let component: VehicleAdminPage;
  let fixture: ComponentFixture<VehicleAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleAdminPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
