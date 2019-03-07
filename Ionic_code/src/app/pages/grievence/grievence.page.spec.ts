import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievencePage } from './grievence.page';

describe('GrievencePage', () => {
  let component: GrievencePage;
  let fixture: ComponentFixture<GrievencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
