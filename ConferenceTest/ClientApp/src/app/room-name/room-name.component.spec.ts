import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomNameComponent } from './room-name.component';

describe('RoomNameComponent', () => {
  let component: RoomNameComponent;
  let fixture: ComponentFixture<RoomNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
