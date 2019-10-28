import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkAnyComponent } from './uk-any.component';

describe('UkAnyComponent', () => {
  let component: UkAnyComponent;
  let fixture: ComponentFixture<UkAnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkAnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
