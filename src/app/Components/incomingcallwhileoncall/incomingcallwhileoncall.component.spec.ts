import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingcallwhileoncallComponent } from './incomingcallwhileoncall.component';

describe('IncomingcallwhileoncallComponent', () => {
  let component: IncomingcallwhileoncallComponent;
  let fixture: ComponentFixture<IncomingcallwhileoncallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingcallwhileoncallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingcallwhileoncallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
