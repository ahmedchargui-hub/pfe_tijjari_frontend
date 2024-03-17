import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarorgComponent } from './calendarorg.component';

describe('CalendarorgComponent', () => {
  let component: CalendarorgComponent;
  let fixture: ComponentFixture<CalendarorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarorgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
