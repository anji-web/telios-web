import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallendedComponent } from './callended.component';

describe('CallendedComponent', () => {
  let component: CallendedComponent;
  let fixture: ComponentFixture<CallendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
