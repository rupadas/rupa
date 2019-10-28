import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationIndependentComponent } from './location-independent.component';

describe('LocationIndependentComponent', () => {
  let component: LocationIndependentComponent;
  let fixture: ComponentFixture<LocationIndependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationIndependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationIndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
