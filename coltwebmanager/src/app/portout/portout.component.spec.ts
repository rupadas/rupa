import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoutComponent } from './portout.component';

describe('PortoutComponent', () => {
  let component: PortoutComponent;
  let fixture: ComponentFixture<PortoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
