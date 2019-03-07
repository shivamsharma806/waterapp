import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackComplaintPage } from './track-complaint.page';

describe('TrackComplaintPage', () => {
  let component: TrackComplaintPage;
  let fixture: ComponentFixture<TrackComplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackComplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
