import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePapersComponent } from './white-papers.component';

describe('WhitePapersComponent', () => {
  let component: WhitePapersComponent;
  let fixture: ComponentFixture<WhitePapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitePapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitePapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
