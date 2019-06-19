import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireNewPasswordFormComponent } from './require-new-password-form.component';

describe('RequireNewPasswordFormComponent', () => {
  let component: RequireNewPasswordFormComponent;
  let fixture: ComponentFixture<RequireNewPasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequireNewPasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequireNewPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
