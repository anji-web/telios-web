import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltransferedComponent } from './calltransfered.component';

describe('CalltransferedComponent', () => {
  let component: CalltransferedComponent;
  let fixture: ComponentFixture<CalltransferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalltransferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalltransferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
