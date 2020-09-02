import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingcalldialComponent } from './incomingcalldial.component';

describe('IncomingcalldialComponent', () => {
  let component: IncomingcalldialComponent;
  let fixture: ComponentFixture<IncomingcalldialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingcalldialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingcalldialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
