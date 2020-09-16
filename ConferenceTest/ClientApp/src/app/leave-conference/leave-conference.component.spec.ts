import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveConferenceComponent } from './leave-conference.component';

describe('LeaveConferenceComponent', () => {
  let component: LeaveConferenceComponent;
  let fixture: ComponentFixture<LeaveConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
