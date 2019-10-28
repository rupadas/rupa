import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadcdrComponent } from './downloadcdr.component';

describe('DownloadcdrComponent', () => {
  let component: DownloadcdrComponent;
  let fixture: ComponentFixture<DownloadcdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadcdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadcdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
