import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingcallwhileonholdComponent } from './incomingcallwhileonhold.component';

describe('IncomingcallwhileonholdComponent', () => {
  let component: IncomingcallwhileonholdComponent;
  let fixture: ComponentFixture<IncomingcallwhileonholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingcallwhileonholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingcallwhileonholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
