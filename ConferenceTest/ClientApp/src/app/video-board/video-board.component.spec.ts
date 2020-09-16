import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBoardComponent } from './video-board.component';

describe('VideoBoardComponent', () => {
  let component: VideoBoardComponent;
  let fixture: ComponentFixture<VideoBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
