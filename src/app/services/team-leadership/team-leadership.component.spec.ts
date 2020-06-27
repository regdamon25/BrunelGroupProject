import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadershipComponent } from './team-leadership.component';

describe('TeamLeadershipComponent', () => {
  let component: TeamLeadershipComponent;
  let fixture: ComponentFixture<TeamLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
