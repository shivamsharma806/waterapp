import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackOnComplaintPage } from './feedback-on-complaint.page';

describe('FeedbackOnComplaintPage', () => {
  let component: FeedbackOnComplaintPage;
  let fixture: ComponentFixture<FeedbackOnComplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackOnComplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackOnComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
