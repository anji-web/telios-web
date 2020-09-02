import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallonholdComponent } from './callonhold.component';

describe('CallonholdComponent', () => {
  let component: CallonholdComponent;
  let fixture: ComponentFixture<CallonholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallonholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallonholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
