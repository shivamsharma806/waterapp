import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOthersComplaintsPage } from './track-others-complaints.page';

describe('TrackOthersComplaintsPage', () => {
  let component: TrackOthersComplaintsPage;
  let fixture: ComponentFixture<TrackOthersComplaintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackOthersComplaintsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackOthersComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
