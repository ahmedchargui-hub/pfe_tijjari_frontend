import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderorgComponent } from './headerorg.component';

describe('HeaderorgComponent', () => {
  let component: HeaderorgComponent;
  let fixture: ComponentFixture<HeaderorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderorgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
