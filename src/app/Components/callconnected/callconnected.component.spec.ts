import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallconnectedComponent } from './callconnected.component';

describe('CallconnectedComponent', () => {
  let component: CallconnectedComponent;
  let fixture: ComponentFixture<CallconnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallconnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
