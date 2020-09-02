import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingwhileonholdComponent } from './callingwhileonhold.component';

describe('CallingwhileonholdComponent', () => {
  let component: CallingwhileonholdComponent;
  let fixture: ComponentFixture<CallingwhileonholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingwhileonholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingwhileonholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
