import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallonholdtransferconfirmationComponent } from './callonholdtransferconfirmation.component';

describe('CallonholdtransferconfirmationComponent', () => {
  let component: CallonholdtransferconfirmationComponent;
  let fixture: ComponentFixture<CallonholdtransferconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallonholdtransferconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallonholdtransferconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
