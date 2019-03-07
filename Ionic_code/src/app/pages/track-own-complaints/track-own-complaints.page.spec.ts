import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOwnComplaintsPage } from './track-own-complaints.page';

describe('TrackOwnComplaintsPage', () => {
  let component: TrackOwnComplaintsPage;
  let fixture: ComponentFixture<TrackOwnComplaintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackOwnComplaintsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackOwnComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
