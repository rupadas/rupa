import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkPublicComponent } from './uk-public.component';

describe('UkPublicComponent', () => {
  let component: UkPublicComponent;
  let fixture: ComponentFixture<UkPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
