import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallconnectedwhileonholdComponent } from './callconnectedwhileonhold.component';

describe('CallconnectedwhileonholdComponent', () => {
  let component: CallconnectedwhileonholdComponent;
  let fixture: ComponentFixture<CallconnectedwhileonholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallconnectedwhileonholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallconnectedwhileonholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
