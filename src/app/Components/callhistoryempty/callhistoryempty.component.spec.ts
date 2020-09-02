import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallhistoryemptyComponent } from './callhistoryempty.component';

describe('CallhistoryemptyComponent', () => {
  let component: CallhistoryemptyComponent;
  let fixture: ComponentFixture<CallhistoryemptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallhistoryemptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallhistoryemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
