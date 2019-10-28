import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberActivationComponent } from './number-activation.component';

describe('NumberActivationComponent', () => {
  let component: NumberActivationComponent;
  let fixture: ComponentFixture<NumberActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
