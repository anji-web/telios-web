import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltransferconfirmationComponent } from './calltransferconfirmation.component';

describe('CalltransferconfirmationComponent', () => {
  let component: CalltransferconfirmationComponent;
  let fixture: ComponentFixture<CalltransferconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalltransferconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalltransferconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
