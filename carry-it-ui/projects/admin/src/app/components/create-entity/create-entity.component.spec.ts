import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntityComponent } from './create-entity.component';

describe('CreateEntityComponent', () => {
  let component: CreateEntityComponent<any, any>;
  let fixture: ComponentFixture<CreateEntityComponent<any, any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
