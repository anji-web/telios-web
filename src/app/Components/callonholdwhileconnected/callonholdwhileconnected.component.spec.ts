import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallonholdwhileconnectedComponent } from './callonholdwhileconnected.component';

describe('CallonholdwhileconnectedComponent', () => {
  let component: CallonholdwhileconnectedComponent;
  let fixture: ComponentFixture<CallonholdwhileconnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallonholdwhileconnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallonholdwhileconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
